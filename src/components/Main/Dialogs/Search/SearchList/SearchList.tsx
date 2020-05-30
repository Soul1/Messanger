import React from 'react'
import {TList} from "../Search";
import api from "../../../../../utils/api/api";
import {appState} from "../../../../../redux/store";
import {connect} from "react-redux";

type TProps = TList & MSTP

const SearchList: React.FC<TProps> = ({name, id, uid}) => {

  const onSetNewRoom = () => {
   api.setNewRoom(uid, id)
  }

  return (
    <div className='search-list'>
      <b>{name}</b>
      <button onClick={onSetNewRoom}>
        Написать
      </button>
    </div>
  )
}
type MSTP = {
  uid: string
}

const mSTP = (state: appState): MSTP => ({
  uid: state.user.id
})
export default connect<MSTP, {}, {} , appState>(mSTP) (SearchList)