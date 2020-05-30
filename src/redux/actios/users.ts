import {TUsersState} from "../../types/redux/reducers";

export const addUsers = (users: TUsersState): {type: 'ADD_USERS'; users: TUsersState} => {
  return {type: 'ADD_USERS', users}
}
