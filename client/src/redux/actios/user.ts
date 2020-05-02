export const isAuthenticated = (isAuth: boolean) => {
  return {type: 'SET_AUTH', isAuth}
}

