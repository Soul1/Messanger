import {TMessagesState} from '../../types/redux/reducers'
import { uuid } from 'uuidv4'

const initialState: TMessagesState = {
  messages: []
}

const messages = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [...state.messages, {date: action.date, message: action.message, id: uuid()}]
      }
    case 'ADD_IMAGE':
      return {
        messages: [...state.messages, {date: action.date, message: action.url, id: uuid()}]
      }
    case 'ADD_MESSAGES':
      console.log(action.messages);
      return {
        messages: [...state.messages, ...action.messages]
      }
    default:
      return state
  }
}

export default messages