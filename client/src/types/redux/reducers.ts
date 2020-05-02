export type IUserState = {
  id: number;
  fullName: string;
  status: string;
  isAuth: boolean;
}
export type IDialogState = {
  id: number;
  fullName: string;
  lastMessage: string;
  avatar: string;
}
export type IDialogsState = {
  usersId: Array<number>;
}
export type IChatsState = {
  catalogs: Array<string>;
}
export type IThemeState = {
  theme: string;
}