import React from 'react';
import {connect} from "react-redux";
import {TChatsState, TChatState} from "../../../types/redux/reducers";
import Chat from "./Chat/Chat";

const Chats = ({catalogs}: {catalogs: TChatState}) => {
  return (
    <div>
      {catalogs.map(catalog => <Chat key={catalog.id} {...catalog}/>)}
    </div>
  );
}

const mSTP = ({chats}: {chats: TChatsState}) => {
  catalogs: chats.catalogs;
}

export default connect(mSTP)(Chats);