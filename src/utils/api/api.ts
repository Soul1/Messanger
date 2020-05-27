import * as firebase from 'firebase/app'
import {isAuthenticated, setToken, setUserId} from '../../redux/actios/user'
import store from '../../redux/store'
import jwt from 'jsonwebtoken'
import {addImage, addMessage} from '../../redux/actios/messages'

type TApi = {
  login: (email: string, password: string) => void
  register: (email: string, password: string, userId: string) => void
  currentUser: (userId: string) => void
  saveMessagePhoto: (uid: string, photo: any) => void
  loadMessages: (userId: string) => void
  saveMessage: (userId: string, date: Date | string, message?: string, imageUrl?: string) => void
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
  loadMessages: async (userId) => {
    const messagesRef = firebase.database().ref(`users/${userId}/rooms/room-${userId}/messages`)
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

  saveMessage: (userId, date, message, imageUrl) => {
    try {
      if (message && !!firebase.auth().currentUser) {
        const newPostKey = firebase.database().ref(`users/${userId}/rooms/room-${userId}`).child('messages').push().key
        firebase.database().ref(`users/${userId}/rooms/room-${userId}/messages/${newPostKey}`).update({
          message,
          date,
          id: newPostKey
        })
      }
      if (imageUrl) {
        const newPostKey = firebase.database().ref(`users/${userId}`).child('messages').push().key
        firebase.database().ref(`users/${userId}/rooms/room-${userId}/messages/${newPostKey}`).update({
          imageUrl,
          date,
          id: newPostKey
        })
      }
    } catch (e) {
      console.error('Error writing new message to Firebase Database', e)
    }
  },

  saveMessagePhoto: async (userId, photo) => {
    try {
      // Upload the image to Cloud Storage.
      let date: Date | string = new Date()
      date = `${date.getHours()}:${date.getMinutes()}`
      const filePath = `users/${userId}/rooms/room-${userId}/messages/${date}/${photo.name}`
      const fileSnapshot = await firebase.storage().ref(filePath).put(photo)
      fileSnapshot.ref.getDownloadURL().then((url) => {
        // Update the chat message placeholder with the image’s URL.
        api.saveMessage(userId, date, undefined, url)
      })

    } catch (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    }
  }
}

export default api
