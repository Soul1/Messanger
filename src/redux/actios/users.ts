import {TUsersState} from '../../types/redux/reducers'

export const addUsers = (users: TUsersState): {type: 'ADD_USERS'; users: TUsersState} => {
  return {type: 'ADD_USERS', users}
}

export const addUsersT = (users: TUsersState) => async (dispatch: any) => {
 await dispatch(addUsers(users))
}