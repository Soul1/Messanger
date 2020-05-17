import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import firebase from 'firebase'
import {isAuthenticated} from '../../redux/actios/user'
import {appState} from "../../redux/store";

type IProps = MSTP & MDTP

const SideBar: React.FC<IProps> = ({isAuth, isAuthenticated}) => {
  const onLogOut = () => {
    firebase.auth().signOut()
      .then(() => {
        isAuthenticated(false)
      }).catch((e) => {
      throw e
    })
  }
  return (

    <nav className='sidebar'>
      {isAuth ?
        <div className='sidebar__link'>
          <NavLink to='/main'>Сообщения</NavLink>
          <NavLink to='/settings'>Настройки</NavLink>
          <NavLink to='/login' onClick={onLogOut}>Выйти</NavLink>
        </div>
        : <div className='sidebar__link'>
          <NavLink to='/login'>Войти</NavLink>
          <NavLink to='/register'>Зарегистрироваться</NavLink>
        </div>
      }
    </nav>
  )
}

type MSTP = {
  isAuth: boolean
}

type MDTP = {
  isAuthenticated: (isAuth: boolean) => void;
}


const mSTP = ({user}: appState): MSTP => ({
  isAuth: user.isAuth,
})

export default connect<MSTP, MDTP, {}, appState>(mSTP, {isAuthenticated})(SideBar)