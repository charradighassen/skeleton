import { createContext, FC, ReactNode, useContext, useState } from "react";

import { AppStateType } from '../types/index';

type PropTypes = {
  children: ReactNode
}

const Context = createContext<AppStateType>({
  state: '',
  setState: () => null,

});

export const useApp = () => useContext<AppStateType>(Context);

const AppState = () => {
  const [state, setState] = useState<string>("initial state!");


  const appState: AppStateType = { state, setState }

  return appState;
};

export const AppContext: FC<PropTypes> = ({ children }): JSX.Element => (
  <Context.Provider value={AppState()} >
    {children}
  </Context.Provider>
)



