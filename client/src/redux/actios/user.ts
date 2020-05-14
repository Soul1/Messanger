export const isAuthenticated = (isAuth: boolean): {type: 'SET_AUTH'; isAuth: boolean} => {
  return {type: 'SET_AUTH', isAuth}
}

