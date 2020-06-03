import {TNameLists} from '../../components/Main/Dialogs/Search/Search'

export const setMessage = (message: string): { type: 'SET_MESSAGE', message: string } => {
  return {type: 'SET_MESSAGE', message}
}

export const setError = (error: boolean): {type: 'SET_ERROR', error: boolean} => {
  return {type: 'SET_ERROR', error}
}

export const setNameLists = (nameLists: TNameLists): {type: 'SET_NAME_LISTS', nameLists: TNameLists} => {
  return {type: 'SET_NAME_LISTS', nameLists}
}

export const setNameListsT = (nameLists: TNameLists) => (dispatch: any) => {
  dispatch(setNameLists(nameLists))
}