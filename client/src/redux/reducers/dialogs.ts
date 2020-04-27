import {IDialogsState, IUserState} from "../../types/redux/reducers";

const initialState: IDialogsState = {
  usersId: []
}

const dialogs = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default dialogs