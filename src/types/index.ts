export interface IRoute {
  name: string;
  path: string;
  component: string;
  secure: Boolean;
}

export type AppStateType = {
  state: string,
  setState: Function
}