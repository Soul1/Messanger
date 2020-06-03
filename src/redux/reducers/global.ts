import {TGlobalMessageState} from '../../types/redux/reducers'

const initialState: TGlobalMessageState = {}

const global = (state = initialState, action: any) => {
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
    case 'SET_NAME_LISTS':
      console.log(action.nameLists, '4545')
      return {
        ...state,
        nameLists: action.nameLists
      }
    default:
      return state
  }
}

export default global
