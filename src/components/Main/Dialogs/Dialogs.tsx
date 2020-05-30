import React, {useEffect} from 'react'
import {appState} from '../../../redux/store'
import {connect} from 'react-redux'
import {TDialogsState} from '../../../types/redux/reducers'
import Dialog from './Dialog/Dialog'
import Search from './Search/Search'
import api from '../../../utils/api/api'
import {uuid} from 'uuidv4'

type TProps = MSTP

const Dialogs: React.FC<TProps> = ({dialogs, users}) => {

  useEffect(() => {
    const localUsers: any = localStorage.getItem('users')
    if (users.length !== localUsers?.length) {
      api.getUsers()
    }
  }, [])

  return (
    <div className='dialogs'>
      <div className="dialogs-search">
        <Search users={users}/>
      </div>
      <ul>
        {dialogs?.dialogs?.map((d) =>
          <li key={uuid()}>
            <Dialog
              fullName={d.fullName}
              avatar={d.avatar}
              lastMessage={d.lastMessage}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

type MSTP = {
  dialogs: TDialogsState
  users: any
}

const mSTP = (state: appState): MSTP => ({
  dialogs: state.dialogs,
  users: state.users
})

export default connect<MSTP, {}, {}, appState>(mSTP)(Dialogs)