import * as firebase from 'firebase/app'
import {isAuthenticated, setToken, setUserId} from '../../redux/actios/user'
import store from '../../redux/store'
import jwt from 'jsonwebtoken'
import {addMessage} from '../../redux/actios/messages'

type TApi = {
  login: (email: string, password: string) => void
  register: (email: string, password: string, userId: string) => void
  currentUser: (userId: string) => void
  savePhoto: (uid: string, photo: any) => void
  loadMessages: (userId: string) => void
  saveMessage: (userId: string, message: string, date: string) => void
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
  loadMessages: (userId) => {
    const messagesRef = firebase.database().ref(`users/${userId}/messages`)
    messagesRef.off()
    const setMessage = (data: any) => {
      const val = data.val()
      store.dispatch(addMessage(val.text, val.date))
    }
    messagesRef.limitToLast(12)
      .on('child_added', setMessage)
    messagesRef.limitToLast(12)
      .on("child_changed", setMessage)
  },

  saveMessage: (userId, message, date) => {
    try {
      if (message && !!firebase.auth().currentUser) {
        const newPostKey = firebase.database().ref(`users/${userId}`).child('messages').push().key
        firebase.database().ref(`users/${userId}/messages/${newPostKey}`).update({
          text: message,
          date,
          id: newPostKey
        })
      }
    } catch (e) {
      console.error('Error writing new message to Firebase Database', e)
    }
  },

  savePhoto: (userId, photo) => {
    console.log(firebase.firestore().collection(`users/${userId}/messages`).id);
    firebase.firestore().collection(`users/${userId}/messages`).add({
      name: firebase.auth().currentUser?.displayName,
      imageUrl: 'LOADING_IMAGE_URL',
      profilePicUrl: firebase.auth().currentUser?.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function (messageRef) {
      // Upload the image to Cloud Storage.
      const filePath = `users/${userId}/messages/${messageRef.id}/${photo.name}`
      return firebase.storage().ref(filePath).put(photo)
        .then((fileSnapshot) => {
          // Generate a public URL for the file.
          return fileSnapshot.ref.getDownloadURL().then((url) => {
            // Update the chat message placeholder with the image’s URL.
            console.log(url);
            console.log(fileSnapshot.metadata.fullPath);
            return messageRef.update({
              imageUrl: url,
              storageUri: fileSnapshot.metadata.fullPath
            });
          });
        });
    }).catch(function (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    });
  }
}

export default api
