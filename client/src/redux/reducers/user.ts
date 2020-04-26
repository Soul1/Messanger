import {IUserState} from "../../types/redux/reducers";

const initialState: IUserState = {
  id: 1,
  FullName: 'string',
  status: 'string',
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default user