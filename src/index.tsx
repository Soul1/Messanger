import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'
import * as firebase from 'firebase'
import 'firebase/auth'
import {BrowserRouter} from 'react-router-dom'

firebase.initializeApp({
  apiKey: 'AIzaSyBEpTkj56k0MrVgUH7arSLhUwhrCOGqzCg',
  authDomain: 'chat-c1043.firebaseapp.com',
  databaseURL: 'https://chat-c1043.firebaseio.com',
  projectId: 'chat-c1043',
  storageBucket: 'chat-c1043.appspot.com',
  messagingSenderId: '123720687667',
  appId: '1:123720687667:web:0d37ad0a71c4d737114346',
  measurementId: 'G-SZL4V4VERR'
})

let app: any;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
          <App/>
          </BrowserRouter>
        </React.StrictMode>
      </Provider>,
      document.getElementById('root')
    );
  }
})


