import React, {useState, KeyboardEvent, ChangeEvent} from 'react'
import {connect} from "react-redux";
import {addMessage} from "../../../../redux/actios/messages";
import {appState} from "../../../../redux/store";

export type FooterProps = MSTP & MDTP

export type MSTP = {}

export type MDTP = {
  addMessage: (message: string, date: string) => void;
}

const Footer = ({addMessage}: FooterProps) => {
  const [message, setMessage] = useState('')
  const [err, setErr] = useState(false)
  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErr(false)
    setMessage(e.target.value)
  }
  const onKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await onAddMessage()
    }
  }
  const onAddMessage = async () => {
    if (!!message) {
      let date: any = new Date()
      date = `${date.getHours()}:${date.getMinutes()}`
      setMessage('')
      await addMessage(message, date)
    } else {
      setErr(true)
    }
  }
  return (
    <footer className='footer'>
      <div className='footer__add'>
        <button>+</button>
      </div>
      <div className={`footer__message ${err ? 'error-message' : ''}`}>
        <input type='text'
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

// const mSTP = (state: appState): MSTP => {
//
// }

export default connect<MSTP, MDTP, {}, appState>(null, {addMessage})(Footer);