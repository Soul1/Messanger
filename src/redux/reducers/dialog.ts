import {TDialogState} from '../../types/redux/reducers'

const initialState: TDialogState = {
  id: '0',
  fullName: 'string',
  lastMessage: 'string',
  avatar: 'string',
}

const dialog = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_ID':
      return {
        ...state,
        id: action.id
      }
    case 'SET_LAST_MESSAGE':
      return {
        ...state,
        lastMessage: action.message
      }

    default:
      return state
  }
}

export default dialog