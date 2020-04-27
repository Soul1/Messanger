import {IThemeState} from "../../types/redux/reducers";

const initialState: IThemeState = {
  theme: 'dark'
}

const theme = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default theme