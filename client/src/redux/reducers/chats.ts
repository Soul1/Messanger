import {TChatsState} from '../../types/redux/reducers';

const initialState: TChatsState = {
  catalogs: [
    {
      id: 0,
      catalog: 'string'
    }
  ]
}

const chats = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default chats