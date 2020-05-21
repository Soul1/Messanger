import React, {ChangeEvent, useEffect, useState} from 'react'
import jwt from 'jsonwebtoken'
import {connect} from 'react-redux'
import {isAuthenticated, setToken} from '../../../redux/actios/user'
import {setError, setMessage} from "../../../redux/actios/globalMessage";
import GlobalMessage from "../../../utils/GlobalMessage/GlobalMessage";
import cn from 'classnames'
import {appState} from "../../../redux/store";
import api from "../../../utils/api/api";

type TProps = MSTP & MDTP

const Login = ({isAuthenticated, setToken, setMessage, setError, errMess}: TProps) => {
  const [form, setForm] = useState({email: '', password: ''})
  const [dis, setDis] = useState(false)
  const onLoginClick = () => {
    try {
      setDis(true)
      const token = api.login(form.email, form.password)
      setDis(false)
      const decoded: any = jwt.decode(token, {complete: true})
      setToken(decoded.signature)
      localStorage.setItem('token', decoded.signature)
      isAuthenticated(true)
    } catch (e) {
      setDis(false)
      setError(true)
      setMessage('Ой, какая-то ошибка с данными... Попробуйте еще раз.')
    }
  }

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => setForm({...form, [e.target.name]: e.target.value})

  useEffect(() => {
    setError(false)
  }, [form])

  return (
    <div className='login width'>
      <div className='login__inner'>
        <h3 className='login-title'>Login</h3>
        <div className='login--form'>
          <div>
            <input type='email' value={form.email} required
                   name='email' onChange={formHandler}/>
            <input type='password' value={form.password} required
                   name='password' onChange={formHandler}/>
            <button onClick={onLoginClick} disabled={dis}>LogIn</button>
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
  setToken: (token: string) => void
  setMessage: (message: string) => void
  setError: (err: boolean) => void
}

type MSTP = {
  errMess: boolean
}

const mSTP = (state: appState): MSTP => ({
  errMess: state.globalMessage.error
})

export default connect<MSTP, MDTP, {}, appState>(mSTP,
  {isAuthenticated, setToken, setError, setMessage})(Login);