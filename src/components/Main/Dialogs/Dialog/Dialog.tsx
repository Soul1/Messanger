import React from 'react';
import {connect} from "react-redux";
import {TDialogState} from "../../../../types/redux/reducers"

const Dialog = (props: TDialogState) => {
  return (
    <div className='dialog'>
      <div className="dialog__user-avatar">
        <img src={props.avatar} alt="User Avatar"/>
      </div>
      <div className="dialog__user-name"><b>{props.fullName}</b></div>
      <div className="dialog__user-message">{props.lastMessage}</div>
    </div>
  );
}

const mSTP = ({dialog} : {dialog: TDialogState}) => {
  fullName: dialog.fullName;
  avatar: dialog.avatar;
  lastMessage: dialog.lastMessage;
}

export default connect(mSTP)(Dialog);