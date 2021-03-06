import React, {useState, KeyboardEvent, ChangeEvent} from 'react'
import {connect} from 'react-redux'
import {appState} from '../../../../redux/store'
import cn from 'classnames'
import api from '../../../../utils/api/api'
import {setLastMessage} from "../../../../redux/actios/dialog";

type TProps = MSTP & MDTP

const Footer: React.FC<TProps> = ({uid, id, setLastMessage}) => {
  const [message, setMessage] = useState('')
  const [err, setErr] = useState(false)

  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErr(false)
    setMessage(e.target.value)
  }
  const onKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await onAddMessage()
      setMessage('')
    }
  }
  const onAddMessage = async () => {
    if (message) {
      let date: Date | string = new Date()
      date = `${date.getHours()}:${date.getMinutes()}`
      setMessage('')
      await api.saveMessage(uid, id, date, message)
      setLastMessage(message)
    } else {
      setErr(true)
    }
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      api.saveMessagePhoto(uid, id, e.target.files[0])
    }
  }
  return (
    <footer className='footer'>
      <div className='footer__add'>
        <input type='file' id='file' onChange={onMainPhotoSelected}/>
        <label htmlFor='file'>+</label>
      </div>
      <div className={cn('footer__message', {'error-message': err})}>
        <input
          onChange={onMessageHandler}
          value={message}
          autoFocus={true}
          onKeyPress={onKeyPress}
          placeholder='Введите ваше сообщение...'/>
        <button onClick={onAddMessage}>Отправить</button>
      </div>
    </footer>
  )
}

type MSTP = {
  uid: string
  id: string
}
type MDTP = {
  setLastMessage: (message: string) => void
}

const mSTP = (state: appState): MSTP => ({
  uid: state.user.id,
  id: state.dialog.id
})

export default connect<MSTP, MDTP, {}, appState>(mSTP, {setLastMessage})(Footer);
