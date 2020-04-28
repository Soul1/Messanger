import {IUserState} from "../../types/redux/reducers";

const initialState: IUserState = {
  id: 0,
  FullName: 'string',
  status: 'string',
  isAuth: false,
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default user