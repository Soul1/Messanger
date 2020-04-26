import {combineReducers, createStore} from "redux"
import Chats from '../reducers/chats'
import Dialog from '../reducers/dialog'
import Dialogs from '../reducers/dialogs'
import Theme from '../reducers/theme'
import User from '../reducers/user'


const reducers = combineReducers({
  chats: Chats,
  dialog: Dialog,
  dialogs: Dialogs,
  theme: Theme,
  user: User,
})

const store = createStore(reducers);

export default store

