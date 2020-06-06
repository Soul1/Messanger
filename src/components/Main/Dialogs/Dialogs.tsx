import React, {useEffect} from 'react'
import {appState} from '../../../redux/store'
import {connect} from 'react-redux'
import {TDialogsState, TUsersState} from '../../../types/redux/reducers'
import Dialog from './Dialog/Dialog'
import Search, {TNameLists} from './Search/Search'
import {uuid} from 'uuidv4'
import {setId} from '../../../redux/actios/dialog'
import {setNameListsT} from '../../../redux/actios/global'

type TProps = MSTP & MDTP


const Dialogs: React.FC<TProps> =
  ({dialogs, users, setId, uid, setNameListsT, userLists}) => {

    useEffect(() => {
      searchUser()
    }, [users])

    const searchUser = async () => {
      const newUsers = await users?.map(([id, user]: any) => {
        return {id, name: user.info.name}
      })
      await setNameListsT(newUsers)
    }

    return (
      <div className='dialogs'>
        <div className="dialogs-search">
          <Search userLists={userLists}/>
        </div>
        <ul>
          {dialogs?.dialogs?.map((d) =>
            <li key={uuid()}
                onClick={() => setId(d.id)}>
              <Dialog
                uid={uid}
                id={d.id}
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
  users: TUsersState
  uid: string
  userLists?: TNameLists
}
type MDTP = {
  setId: (id: string) => void
  setNameListsT: (userLists: TNameLists) => void
}

const mSTP = (state: appState): MSTP => ({
  dialogs: state.dialogs,
  users: state.users,
  uid: state.user.id,
  userLists: state.global.userLists
})

export default connect<MSTP, MDTP, {}, appState>(mSTP, {setId, setNameListsT})(Dialogs)