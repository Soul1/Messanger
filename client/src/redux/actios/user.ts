export const isAuthenticated = (isAuth: boolean): {type: string; isAuth: boolean} => {
  return {type: 'SET_AUTH', isAuth}
}

