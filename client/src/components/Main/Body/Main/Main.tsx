import React from 'react'
import Message from "../../../common/Message/Message";

const Main = () => {
  return (
    <main className='main'>
      <div className='main__message'>
        <div className='main__message-avatar'>
          <img src='' alt='User Avatar'/>
        </div>
        <Message />
      </div>
    </main>
  )
}

export default Main;