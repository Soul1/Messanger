export type TUserState = {
  id?: number;
  fullName?: string;
  status?: string;
  isAuth?: boolean;
}
export type TDialogState = {
  id?: number;
  fullName?: string;
  lastMessage?: string;
  avatar?: string;
}
export type TDialogsState = {
  usersId?: number[];
}
export type TChatsState = {
  catalogs?: {id: number; catalog: string;}[];
}
export type TChatState = {id: number; catalog: string;}[];

export type TThemeState = {
  theme?: string;
}
export type TMessagesState = {
  messages?: {
    date: string;
    message: string;
    id: number;
  }[]
}