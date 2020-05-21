import {TMessagesState} from '../../types/redux/reducers'
import { uuid } from 'uuidv4'

const initialState: TMessagesState = {
  messages: [{
    date: '14:49',
    message: 'tvarina',
    id: 0,
  }]
}

const messages = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [...state.messages, {date: action.date, message: action.message, id: uuid()}]
      }
    default:
      return state
  }
}

export default messages