import {IUserState} from "../../types/redux/reducers";

const initialState: IUserState = {
  id: 0,
  fullName: 'string',
  status: 'string',
  isAuth: false,
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuth: action.isAuth,
      }
    default:
      return state
  }
}

export default user