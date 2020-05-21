//массив юзеров(пока не знаю зачем, может для друзей?)
export type TUsersState = TUserState[]
//юзер инициализируется после входа
export type TUserState = {
  id: number
  fullName: string
  status: string
  isAuth: boolean
  sex: 'male' | 'female'
  birthDate?: string
  avatar: string
  token?: string
}
//информация для средней панели, где будут всё комнаты с диалогами(как в телеграмме левая часть приложения)
export type TDialogState = {
  id: number
  fullName: string
  lastMessage?: string
  avatar: string
}
//массив диалогов, чтобы отображать в компоненте
export type TDialogsState = {
  dialogs?: TDialogState[]
}
//информация о директориях, которые сам юзер кидает
//свои диалоги или группы на которые подписан(нужно немного доработать)
export type TChatState = {
  id: number
  catalog: string
}
//массив каталогов для отображения в компоненте
export type TChatsState = {
  catalogs?: TChatState[]
}
//тема приложения, логика простая, есть темная и светлая тема(...)
export type TThemeState = {
  theme: string
}
//массив сообщений из переписки, пока не уверен,
//как мы будем привязывать массив к определенному юзеру
// (можно добавить в объект id юзера с которым ведется сама переписка)
export type TMessagesState = {
  messages?: TMessageState[]
}
//сообщения в переписке
export type TMessageState = {
  date: string
  message: string
  id: number
}
//сообщения, которые созданы для взаимодействия с юзером
export type TGlobalMessageState = {
  message?: string
  error?: boolean
}

