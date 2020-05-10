import React from 'react';
import {connect} from "react-redux";
import {TChatsState, TChatState} from "../../../types/redux/reducers";
import Chat from "./Chat/Chat";

interface IProps {
  catalogs: TChatState[]
}

const Chats = ({catalogs}: IProps) => {
  return (
    <div>
      {catalogs.map(catalog => <Chat key={catalog.id} {...catalog}/>)}
    </div>
  )
}

const mSTP = ({chats}: { chats: TChatsState }) => {
  catalogs: chats.catalogs;
}

export default connect(mSTP)(Chats)