import React from 'react'

interface IProps {
  message: string
}

const Message = ({message}: IProps) => {
  return (
        <div className='main__message-text'>
          <p>
            {message}
          </p>
        </div>
  )
}

export default Message