import React from 'react'
import Message from "../../../common/Message/Message";
import {connect} from "react-redux";
import {TMessageState, TUserState} from "../../../../types/redux/reducers";

interface IProps {
  messages: TMessageState[]
  avatar?: string
}

const Main = (props: IProps) => {
  return (
    <main className='main'>
      <div className='main__messages'>
        {
          props.messages.map((message: TMessageState) => <Message key={message.id}
                                                                  avatar={props.avatar}
                                                                  message={message}
          />)
        }
      </div>
    </main>
  )
}

interface IMain {
  messages: { messages: TMessageState[] }
  user: TUserState
}

const mSTP = (state: IMain): IProps => ({
  messages: state.messages.messages,
  avatar: state.user.avatar
})

export default connect(mSTP)(Main);