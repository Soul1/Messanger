import {TDialogsState} from "../../types/redux/reducers";

const initialState: TDialogsState = {
  dialogs: []
}

const dialogs = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default dialogs