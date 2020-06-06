import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Body from './Body/Body'
import {connect} from 'react-redux'
import {appState} from '../../redux/store'
import {TUsersState} from '../../types/redux/reducers'

type TProps = MSTP

const Main: React.FC<TProps> = ({users}) => {

  return (
    <div className='main-display'>

      <div className="main-display__dialogs">
        {!!users?.length && <Dialogs/>}
      </div>
      <div className="main-display__body">
        <Body/>
      </div>
    </div>
  )
}

type MSTP = {
  users: TUsersState
}

const mSTP = (state: appState): MSTP => ({
  users: state.users
})

export default connect<MSTP, {}, {}, appState>(mSTP)(Main)