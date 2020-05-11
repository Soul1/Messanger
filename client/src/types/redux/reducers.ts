export type TUsersState = TUserState[]

export type TUserState = {
  id: number
  fullName: string
  status: string
  isAuth: boolean
  avatar?: string
}

export type TDialogState = {
  id: number
  fullName: string
  lastMessage?: string
  avatar?: string
}

export type TDialogsState = {
  dialogs?: TDialogState[]
}

export type TChatState = {
  id: number
  catalog: string
}

export type TChatsState = {
  catalogs?: TChatState[]
}

export type TThemeState = {
  theme: string
}

export type TMessagesState = {
  messages?: TMessageState[]
}
export type TMessageState = {
  date: string
  message: string
  id: number
}