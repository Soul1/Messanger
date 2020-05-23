import {TUserState} from '../../types/redux/reducers'

const initialState: TUserState = {
  id: null,
  fullName: 'string',
  status: 'string',
  isAuth: false,
  sex: 'male',
  birthDate: '09.07.2000',
  avatar: 'https://goo.su/162G'
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isAuth: action.isAuth,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_USERID':
      return {
        ...state,
        id: action.id,
      }
    default:
      return state
  }
}

export default user