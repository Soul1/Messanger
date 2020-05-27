import {TMessagesState} from '../../types/redux/reducers'

export const addMessage = (message: string, date: string)
  : {type: 'ADD_MESSAGE', message: string, date: string} => {
  return {type: 'ADD_MESSAGE', message, date}
}

export const addImage = (url: string, date: string)
  : {type: 'ADD_IMAGE', url: string, date: string} => {
  return {type: 'ADD_IMAGE', url, date}
}

export const addMessages = (messages: TMessagesState)
  : {type: 'ADD_MESSAGES', messages: TMessagesState} => {
  return {type: 'ADD_MESSAGES', messages}
}
