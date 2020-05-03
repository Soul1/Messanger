import {TMessagesState} from "../../types/redux/reducers";

const initialState: TMessagesState = {
  messages: [{
    date: '02.05.2000',
    message: 'dsdsd',
    id: 0,
  }]
}

const dialogs = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default dialogs