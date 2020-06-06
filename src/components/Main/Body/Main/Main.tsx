import React, {useEffect} from 'react'
import Message from "../../../common/Message/Message";
import {connect} from "react-redux";
import {TMessagesState, TMessageState} from "../../../../types/redux/reducers";
import {appState} from "../../../../redux/store";
import api from "../../../../utils/api/api";

type TProps = MSTP

const Main: React.FC<TProps> = (props) => {

  useEffect(() => {
      api.loadMessages(props.uid, props.id)
  }, [])

  return (
    <main className='main'>
      <div className="main__container">
        <div className='main__messages'>
            {
              props.messages?.messages?.map((message: TMessageState) => <Message key={message.id}
                                                                      avatar={props.avatar}
                                                                      message={message}
              />)
            }
          </div>
        </div>
    </main>
  )
}
type MSTP = {
  messages: TMessagesState
  avatar?: string
  uid: string
  id: string
}

const mSTP = (state: appState): MSTP => ({
  messages: state.messages,
  avatar: state.user.avatar,
  uid: state.user.id,
  id: state.dialog.id
})

export default connect<MSTP, {}, {}, appState>(mSTP)(Main);