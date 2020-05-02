import {combineReducers, createStore, compose} from "redux"
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
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store

