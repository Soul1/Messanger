import * as firebase from 'firebase/app'
import {isAuthenticated, setToken, setUserId} from '../../redux/actios/user'
import store from '../../redux/store'
import jwt from 'jsonwebtoken'
import {addImage, addMessage} from '../../redux/actios/messages'
import {addUsersT} from '../../redux/actios/users'

type TApi = {
  login: (email: string, password: string) => void
  register: (email: string, password: string, userId: string) => void
  currentUser: (userId: string) => void
  getUsers: () => void
  getDialogs: (uid: string) => void
  setNewRoom: (uid: string, id: string) => void
  saveMessagePhoto: (uid: string, id: string, photo: any) => void
  loadMessages: (userId: string, id: string) => void
  saveMessage: (userId: string, id: string, date: Date | string, message?: string, imageUrl?: string) => void
  updateDatabaseAfterRegistered: (userId: string, name: string) => void
}

type TMadeToken = () => void

const madeToken: TMadeToken = async () => {
  const token: any = await firebase.auth().currentUser?.getIdToken()
  const decoded: any = jwt.decode(token, {complete: true})
  store.dispatch(setToken(decoded.signature))
  localStorage.setItem('token', decoded.signature)
}

const api: TApi = {
  login: async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      madeToken()
      store.dispatch(isAuthenticated(true))
    } catch (e) {
      throw e
    }

  },
  register: async (email: string, password: string, userId: string) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await api.currentUser(userId)
      madeToken()
    } catch (e) {
      throw e
    }
  },
  updateDatabaseAfterRegistered: async (userId: string, name: string) => {
    try {
      await firebase.database().ref(`users/${userId}/info`).set({name})
      store.dispatch(isAuthenticated(true))
    } catch (e) {
      throw e
    }
  },
  currentUser: (userId: string) => {
    const user = firebase.auth().currentUser
    if (user && user.uid !== userId) {
      store.dispatch(setUserId(user?.uid))
    }
  },

  getUsers: () => {
    const messagesRef = firebase.database().ref(`users`)
    messagesRef.off()
    const setMessage = async (data: any) => {
      const val = data.val()
      const localUsers: any = Object.entries(val)
      if (val) {
        await localStorage.setItem('users', localUsers)
        await store.dispatch(addUsersT(val))
      }
    }
    messagesRef.on('value', setMessage)
  },

  loadMessages: async (userId, id) => {
    const messagesRef = firebase.database().ref(`rooms/${userId}/room-${id}/messages`)
    messagesRef.off()
    const setMessage = async (data: any) => {
      const val = data.val()
      if (val.message) {
        await store.dispatch(addMessage(val.message, val.date))
      }
      if (val.imageUrl) {
        await store.dispatch(addImage(val.imageUrl, val.date))
      }
    }
    messagesRef.limitToLast(12)
      .on('child_added', setMessage)
    messagesRef.limitToLast(12)
      .on("child_changed", setMessage)
  },

  saveMessage: (userId, id, date, message, imageUrl) => {
    try {
      if (message && !!firebase.auth().currentUser) {
        const newPostKey = firebase.database().ref(`rooms/${userId}/room-${id}`).child('messages').push().key
        firebase.database().ref(`rooms/${userId}/room-${id}/messages/${newPostKey}`).update({
          message,
          date,
          id: newPostKey
        })
      }
      if (imageUrl) {
        const newPostKey = firebase.database().ref(`users/${userId}`).child('messages').push().key
        firebase.database().ref(`rooms/${userId}/room-${id}/messages/${newPostKey}`).update({
          imageUrl,
          date,
          id: newPostKey
        })
      }
    } catch (e) {
      console.error('Error writing new message to Firebase Database', e)
    }
  },

  saveMessagePhoto: async (userId, id, photo) => {
    try {
      let date: Date | string = new Date()
      date = `${date.getHours()}:${date.getMinutes()}`
      const filePath = `rooms/${userId}/room-${userId}/messages/${date}/${photo.name}`
      const fileSnapshot = await firebase.storage().ref(filePath).put(photo)
      fileSnapshot.ref.getDownloadURL().then((url) => {
        api.saveMessage(userId, id, date, undefined, url)
      })

    } catch (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    }
  },
  setNewRoom: (uid, id) => {
    firebase.database().ref(`rooms/${uid}/room-${id}/messages`).update(
      {m: 'vv'}
    )
  },
  getDialogs: (uid) => {

  }
}

export default api
