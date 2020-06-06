import React from 'react'
import {TList} from "../Search";
import api from "../../../../../utils/api/api";
import {appState} from "../../../../../redux/store";
import {connect} from "react-redux";
import {setId} from "../../../../../redux/actios/dialog";

type TProps = TList & MSTP & MDTP

const SearchList: React.FC<TProps> = ({name, id, uid, setId}) => {

  const onSetNewRoom = () => {
    api.setNewRoom(uid, id)
    setId(id)
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
type MDTP = {
  setId: (id: string) => void
}

const mSTP = (state: appState): MSTP => ({
  uid: state.user.id
})
export default connect<MSTP, MDTP, {}, appState>(mSTP, {setId})(SearchList)