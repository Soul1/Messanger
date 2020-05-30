import React from 'react'

type TProps = {
  fullName: string
  avatar: string
  lastMessage?: string
}

const Dialog: React.FC<TProps> = (props) => {
  return (
    <div className='dialog'>
      <div className="dialog__user-avatar avatar">
        <img src={props.avatar} alt="User Avatar"/>
      </div>
      <div className="dialog__user-name">{props.fullName}</div>
      <div className="dialog__user-message">{props.lastMessage}</div>
    </div>
  );
}


export default Dialog