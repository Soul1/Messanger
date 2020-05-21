import {TGlobalMessageState} from "../../types/redux/reducers";

const initialState: TGlobalMessageState = {}

const globalMessage = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default globalMessage
