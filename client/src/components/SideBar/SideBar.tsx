import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {IUserState} from "../../types/redux/reducers"

const SideBar = ({isAuth}: { isAuth: boolean }) => {
  return (
    <div>
      {isAuth ?
      <>
        <NavLink to='/main'>Сообщения</NavLink>
        <NavLink to='/settings'>Настройки</NavLink>
        <NavLink to='/login'>Выйти</NavLink>
      </> : <NavLink to='/login'>Войти</NavLink>}
    </div>
  );
};

const mSTP = ({user}: { user: IUserState }) => ({
  isAuth: user.isAuth,
})

export default connect()(SideBar);