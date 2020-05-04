import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import firebase from "firebase";
import {isAuthenticated} from "../../redux/actios/user"

interface ISideBar {
  user: {
    isAuth: boolean
  }
}

interface IProps {
  isAuth: boolean;
  isAuthenticated: (isAuth: boolean) => void
}

const SideBar = ({isAuth, isAuthenticated}: IProps) => {
  const onLogOut = () => {
    firebase.auth().signOut()
      .then(() => {
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

const mSTP = (state: ISideBar): IProps => ({
  isAuth: state.user.isAuth,
}) as IProps

export default connect(mSTP, {isAuthenticated})(SideBar);