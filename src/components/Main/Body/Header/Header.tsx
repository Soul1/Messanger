import React from 'react'
import {appState} from '../../../../redux/store'
import {connect} from 'react-redux'
import cn from 'classnames'

type TProps = MSTP

const Header: React.FC<TProps> = ({fullName, status, avatar}) => {
  return (
    <header className='header header__container'>
      <div className='header__avatar avatar'>
        <img src={avatar} alt='User Avatar'/>
      </div>
      <div className='header__user'>
        <div className='header__user-name'>{fullName}</div>
        <div className={cn('header__user-status',
          {'online': status === 'online'}, {'offline': status === 'offline'})}>
          {status}
        </div>
      </div>
    </header>
  )
}

type MSTP = {
  fullName: string
  status?: 'online' | 'offline'
  avatar: string
}

const mSTP = (state: appState): MSTP => ({
  fullName: state.user.fullName,
  status: state.user.status,
  avatar: state.user.avatar,
})

export default connect<MSTP, {}, {}, appState>(mSTP)(Header);