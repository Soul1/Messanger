import {TUserState} from '../../types/redux/reducers'

const initialState: TUserState = {
  id: null,
  fullName: 'string',
  status: "offline",
  isAuth: false,
  sex: 'male',
  birthDate: '09.07.2000',
  avatar: 'https://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B2-%D0%A1%D1%82%D0%B8%D0%BC-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-12.png'
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