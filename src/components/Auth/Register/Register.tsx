import React, {ChangeEvent, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {appState} from '../../../redux/store'
import {setError, setMessage} from '../../../redux/actios/globalMessage'
import GlobalMessage from '../../../utils/GlobalMessage/GlobalMessage'
import cn from 'classnames'
import api from '../../../utils/api/api'

type IProps = MSTP & MDTP

const Register = ({errMess, setMessage, setError, userId}: IProps) => {
  const [form, setForm] = useState({email: '', password: '', nickname: ''})
  const [dis, setDis] = useState(false)
  const onRegisterClick = () => {
    try {
      setDis(true)
      api.register(form.email, form.password, userId)
      setDis(false)
    } catch (e) {
      setDis(false)
      setError(true)
      setMessage('Ой, какая-то ошибка с данными... Попробуйте еще раз.')
    }
  }
  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if (userId !== null) {
      api.updateDatabaseAfterRegistered(userId, form.nickname)
      setForm({email: '', password: '', nickname: ''})
    }
  }, [userId])

  useEffect(() => {
    if (errMess) {
      setError(false)
    }
  }, [form])

  return (
    <div className='login'>
      <div className="container">
        <div className="login__inner">
          <h3 className="login__title">Register</h3>
          <div className="login--form">
            <div>
              <h4 className="login__designation">
                Ваше Имя
              </h4>
              <input type="text" value={form.nickname} required
                     name="nickname" onChange={formHandler}/>

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
              <button onClick={onRegisterClick} disabled={dis}>Register</button>
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
  userId: string
}

const mSTP = (state: appState): MSTP => ({
  errMess: state.globalMessage.error,
  userId: state.user.id
})

export default connect<MSTP, MDTP, {}, appState>(mSTP, {setMessage, setError})(Register);