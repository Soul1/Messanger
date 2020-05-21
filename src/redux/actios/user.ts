export const isAuthenticated = (isAuth: boolean): {type: 'SET_AUTH'; isAuth: boolean} => {
  return {type: 'SET_AUTH', isAuth}
}
export const setToken = (token: string): {type: 'SET_TOKEN'; token: string} => {
  return {type: 'SET_TOKEN', token}
}