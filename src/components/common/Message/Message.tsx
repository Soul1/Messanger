import React from 'react'
import {TMessageState} from "../../../types/redux/reducers";

type TProps = {
  message: TMessageState
  avatar?: string
}

const Message: React.FC<TProps> = ({message, avatar}) => {
  return (
    <div className='main__message'>
      <div className='main__message-avatar avatar'>
        <img src={avatar} alt='User Avatar'/>
      </div>
      <div className='main__message-text'>
        {!message.imageUrl ?
          <p>
            {message.message}
          </p>
          :
          <img src={message.imageUrl} alt=""/>
        }
      </div>
      <div className="main__message-time">
      {message.date}
      </div>
    </div>
  )
}

export default Message