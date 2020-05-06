export const addMessage = (message: string, date: string)
  : {type: string; message: string, date: string} => {
  return {type: 'ADD_MESSAGE', message, date,}
}