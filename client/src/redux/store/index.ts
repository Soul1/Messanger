import {combineReducers, createStore, compose} from 'redux'
import Chats from '../reducers/chats'
import Dialog from '../reducers/dialog'
import Dialogs from '../reducers/dialogs'
import Theme from '../reducers/theme'
import User from '../reducers/user'
import Messages from '../reducers/messages'
import GlobalMessage from '../reducers/globalMessage'


const reducers = combineReducers({
  chats: Chats,
  dialog: Dialog,
  dialogs: Dialogs,
  theme: Theme,
  user: User,
  messages: Messages,
  globalMessage: GlobalMessage,
})

type rootReducers = typeof reducers
export type appState = ReturnType<rootReducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers())

export default store

