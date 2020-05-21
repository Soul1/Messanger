export const setMessage = (message: string): { type: 'SET_MESSAGE', message: string } => {
  return {type: 'SET_MESSAGE', message}
}

export const setError = (error: boolean): {type: 'SET_ERROR', error: boolean} => {
  return {type: 'SET_ERROR', error}
}
