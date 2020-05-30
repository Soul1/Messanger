import {TUsersState} from '../../types/redux/reducers'

const initialState: TUsersState = []

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_USERS':
      return Object.entries(action.users)
    default:
      return state
  }
}

export default users