import React, {ChangeEvent, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {setError, setMessage} from "../../../redux/actios/global";
import GlobalMessage from "../../../utils/GlobalMessage/GlobalMessage";
import cn from 'classnames'
import {appState} from "../../../redux/store";
import api from "../../../utils/api/api";

type TProps = MSTP & MDTP

const Login = ({setMessage, setError, errMess}: TProps) => {
  const [form, setForm] = useState({email: '', password: ''})
  const [dis, setDis] = useState(false)
  const onLoginClick = () => {
    try {
      setDis(true)
      api.login(form.email, form.password)
      setDis(false)
      setForm({email: '', password: ''})
    } catch (e) {
      setDis(false)
      setError(true)
      setMessage('Ой, какая-то ошибка с данными... Попробуйте еще раз.')
    }
  }

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => setForm({...form, [e.target.name]: e.target.value})

  useEffect(() => {
    if (errMess) {
      setError(false)
    }
  }, [form])

  return (
    <div className='login'>
      <div className="container">
        <div className='login__inner'>
          <h3 className='login__title'>Login</h3>
          <div className='login--form'>
            <div>
              <h4 className="login__designation">
                Email
              </h4>
              <input type="email" value={form.email} required
                     name="email" onChange={formHandler}/>

              <h4 className="login__designation">
                Пароль
              </h4>
              <input type="password" value={form.password} required
                     name="password" onChange={formHandler}/>
              <button onClick={onLoginClick} disabled={dis}>LogIn</button>
            </div>
          </div>
          <div className={cn('login__message', {'display-none': !errMess})}>
            <GlobalMessage/>
          </div>
        </div>
      </div>
    </div>
  )
}

type MDTP = {
  setMessage: (message: string) => void
  setError: (err: boolean) => void
}

type MSTP = {
  errMess: boolean
}

const mSTP = (state: appState): MSTP => ({
  errMess: state.global.error
})

export default connect<MSTP, MDTP, {}, appState>(mSTP,
  {setError, setMessage})(Login)