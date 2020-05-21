import React, {ChangeEvent, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {isAuthenticated} from '../../../redux/actios/user'
import {appState} from "../../../redux/store";
import {setError, setMessage} from "../../../redux/actios/globalMessage";
import GlobalMessage from "../../../utils/GlobalMessage/GlobalMessage";
import cn from "classnames";
import api from "../../../utils/api/api";

type IProps = MSTP & MDTP

const Register = ({isAuthenticated, errMess, setMessage, setError}: IProps) => {
  const [form, setForm] = useState({email: '', password: '', nickname: ''})
  const [dis, setDis] = useState(false)
  const onRegisterClick = () => {
    try {
      setDis(true)
      api.register(form.email, form.password, form.nickname)
      setDis(false)
      isAuthenticated(true)
    } catch (e) {
      setDis(false)
      setMessage('Ой, какая-то ошибка с данными... Попробуйте еще раз.')
      setError(true)
    }
  }
  const formHandler = (e: ChangeEvent<HTMLInputElement>) => setForm({...form, [e.target.name]: e.target.value})

  useEffect(() => {
    setError(false)
  }, [form])

  return (
    <div className='login width'>
      <div className="login__inner">
        <h3 className="login-title">Register</h3>
        <div className="login--form">
          <div>
            <input type="text" value={form.nickname} required
                   name="nickname" onChange={formHandler}/>
            <input type="email" value={form.email} required
                   name="email" onChange={formHandler}/>
            <input type="password" value={form.password} required
                   name="password" onChange={formHandler}/>
            <button onClick={onRegisterClick} disabled={dis}>Register</button>
          </div>
        </div>
        <div className={cn('login__message', {'display-none': !errMess})}>
          <GlobalMessage/>
        </div>
      </div>
    </div>
  )
}

type MDTP = {
  isAuthenticated: (isAuth: boolean) => void
  setMessage: (message: string) => void
  setError: (err: boolean) => void
}
type MSTP = {
  errMess: boolean
}

const mSTP = (state: appState): MSTP => ({
  errMess: state.globalMessage.error
})

export default connect<MSTP, MDTP, {}, appState>(mSTP, {isAuthenticated, setMessage, setError})(Register);