import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Chats from '../reducers/chats'
import Dialog from '../reducers/dialog'
import Dialogs from '../reducers/dialogs'
import Theme from '../reducers/theme'
import User from '../reducers/user'
import Messages from '../reducers/messages'
import Global from '../reducers/global'
import Users from '../reducers/users'

const reducers = combineReducers({
  chats: Chats,
  dialog: Dialog,
  dialogs: Dialogs,
  theme: Theme,
  user: User,
  users: Users,
  messages: Messages,
  global: Global,
})

type rootReducers = typeof reducers
export type appState = ReturnType<rootReducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store

