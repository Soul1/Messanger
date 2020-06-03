import React from 'react'
import {appState} from "../../redux/store";
import {connect} from "react-redux";

type TProps = MSTP

const GlobalMessage: React.FC<TProps> = ({message}) => {

  return (
    <div className='globalMessage'>
      <p>{message}</p>
    </div>
  )
}

type MSTP = {
  message: string
}

const mSTP = (state: appState): MSTP => ({
  message: state.global.message
})

export default connect<MSTP, {}, {}, appState>(mSTP)(GlobalMessage)