import React from 'react'
import api from '../../../../utils/api/api'

type TProps = {
  fullName: string
  avatar: string
  lastMessage?: string
  id: string
  uid: string
}

const Dialog: React.FC<TProps> = (props) => {

  const onDisplayThisRoom = () => {
    api.setNewRoom(props.uid, props.id)
  }

  return (
    <div className='dialog' onClick={onDisplayThisRoom}>
      <div className="dialog__user-avatar avatar">
        <img src={props.avatar} alt="User Avatar"/>
      </div>
      <div className="dialog__user-name">{props.fullName}</div>
      <div className="dialog__user-message">{props.lastMessage}</div>
    </div>
  )
}


export default Dialog