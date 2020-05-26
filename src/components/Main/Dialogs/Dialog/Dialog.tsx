import React from 'react';
import {connect} from "react-redux";
import {appState} from "../../../../redux/store";

type TProps = MSTP

const Dialog: React.FC<TProps> = (props) => {
  return (
    <div className='dialog'>
      <div className="dialog__user-avatar avatar">
        <img src={props.avatar} alt="User Avatar"/>
      </div>
      <div className="dialog__user-name"><b>{props.fullName}</b></div>
      <div className="dialog__user-message">{props.lastMessage}</div>
    </div>
  );
}

type MSTP = {
  fullName: string
  avatar: string
  lastMessage?: string
}

const mSTP = (state: appState): MSTP => ({
  fullName: state.dialog.fullName,
  avatar: state.dialog.avatar,
  lastMessage: state.dialog?.lastMessage
})

export default connect<MSTP, {}, {}, appState>(mSTP)(Dialog);