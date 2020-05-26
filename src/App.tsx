import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Settings from "./components/SideBar/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {appState} from "./redux/store";
import {isAuthenticated, setToken} from "./redux/actios/user";
import Preloader from "./utils/Preloader/Preloader";
import api from "./utils/api/api";

type TProps = MSTP & MDTP

const App: React.FC<TProps> = ({uid, isAuth, token, isAuthenticated, setToken}) => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const localToken: string | null = localStorage.getItem('token')
    if (localToken) {
      setIsLoading(true)
      setToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('token') === token) {
      isAuthenticated(true)
      setIsLoading(false)
      api.currentUser(uid)
    }
  }, [token])

  return (
    <>
      {isLoading ? <Preloader/>
        : <div className="app">
          <div className="app__sidebar">
            <SideBar/>
          </div>
          <div className="app__main">
            <Switch>
              {isAuth &&
              <>
                <Redirect to='main'/>
                <Route path='/main' render={() => <Main/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
              </>
              }
              <Route path='/login' render={() => <Login/>}/>
              <Route path='/register' render={() => <Register/>}/>
              <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
          </div>
        </div>
      }
    </>
  )
}

type MSTP = {
  isAuth: boolean
  token: string
  uid: string
}
type MDTP = {
  isAuthenticated: (isAuth: boolean) => void
  setToken: (token: string) => void
}

const mSTP = (state: appState): MSTP => ({
  isAuth: state.user.isAuth,
  uid: state.user.id,
  token: state.user?.token
})

export default connect<MSTP, MDTP, {}, appState>(mSTP, {isAuthenticated, setToken})(App);
