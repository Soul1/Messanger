import React from 'react'

interface IProps {
  message: {
    date: string;
    message: string;
    id: number;
  }
  avatar?: string
}

const Message = ({message, avatar}: IProps) => {
  return (
    <div className='main__message'>
      <div className='main__message-avatar'>
        <img src={avatar} alt='User Avatar'/>
      </div>
      <div className='main__message-text'>
        <p>
          {message.message}
        </p>
      </div>
      <div className="main__message-time">
      {message.date}
      </div>
    </div>
  )
}

export default Message