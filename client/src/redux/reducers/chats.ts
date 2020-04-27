import {IChatsState} from "../../types/redux/reducers";

const initialState: IChatsState = {
  catalogs: []
}

const chats = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default chats