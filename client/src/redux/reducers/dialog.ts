import {IDialogState} from "../../types/redux/reducers";

const initialState: IDialogState = {
  id: 0,
  fullName: 'string',
  lastMessage: 'string',
  avatar: 'string',
}

const dialog = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default dialog