export const setId = (id: string): { type: 'SET_ID', id: string } => {
  return{ type: 'SET_ID', id}
}
export const setLastMessage = (message: string): { type: 'SET_LAST_MESSAGE', message: string } => {
  return{ type: 'SET_LAST_MESSAGE', message}
}