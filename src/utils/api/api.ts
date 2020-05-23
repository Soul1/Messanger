import firebase from 'firebase'
import {isAuthenticated, setToken, setUserId} from '../../redux/actios/user'
import store from '../../redux/store'
import jwt from 'jsonwebtoken'

type TApi = {
  login: (email: string, password: string) => void
  register: (email: string, password: string, userId: string) => void
  currentUser: (userId: string) => void
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
  }
}

export default api
