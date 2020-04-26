export type IUserState = {
  id: number;
  FullName: string;
  status: string;

}
export type IDialogState = {
  id: number;
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