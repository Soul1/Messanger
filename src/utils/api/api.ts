import firebase from "firebase";
import {setError} from "../../redux/actios/globalMessage";

type TApi = {
  login: (email: string, password: string) => any
  register: (email: string, password: string, name: string) => void
}

const api: TApi = {
  login: async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    const token: any = await firebase.auth().currentUser?.getIdToken()
    await setError(false)
    return token
  },
  register: async (email: string, password: string, name: string) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    await setError(false)
  }
}

export default api