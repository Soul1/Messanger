export const addMessage = (message: string, date: string)
  : {type: 'ADD_MESSAGE'; message: string, date: string} => {
  return {type: 'ADD_MESSAGE', message, date,}
}