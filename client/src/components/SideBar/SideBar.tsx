import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {IUserState} from "../../types/redux/reducers"
import firebase from "firebase";
import {isAuthenticated} from "../../redux/actios/user"
import {Redirect} from 'react-router-dom'

const SideBar = (props: { isAuth: boolean, isAuthenticated: any }) => {
  const {isAuth, isAuthenticated} = props
  const onLogOut = () => {
    firebase.auth().signOut().then(() => {
      // <Redirect to='/login'/>
      isAuthenticated(false)
    }).catch((e) => {
      throw e
    });
  }
  return (
    <div>
      {isAuth ?
        <>
          <NavLink to='/main'>Сообщения</NavLink>
          <NavLink to='/settings'>Настройки</NavLink>
          <NavLink to='/login'>
            <button onClick={onLogOut}>Выйти</button>
          </NavLink>
        </> : <NavLink to='/login'>Войти</NavLink>}
    </div>
  );
};

const mSTP = ({user}: { user: IUserState }) => ({
  isAuth: user.isAuth,
})

export default connect(mSTP, {isAuthenticated})(SideBar);