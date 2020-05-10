import {TUserState} from '../../types/redux/reducers'

const initialState: TUserState = {
  id: 0,
  fullName: 'string',
  status: 'string',
  isAuth: false,
  avatar: 'https://clck.ru/NNvap'
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