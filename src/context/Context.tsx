import { createContext, Dispatch, FC, ReactNode, useReducer } from "react";
import { FILTERS, IS_DEFAULT_DARK } from "../constants";
import themeReducer from "./Reducer";
import { ActionT, StateT } from "./types";

const initialValues: StateT = {
  todoList: [],
  selectedFilter: FILTERS.ALL,
  filteredList: [],
  isDarkTheme: IS_DEFAULT_DARK,
};

type PropsT = {
  children?: ReactNode;
};

export const Context = createContext(initialValues);
export const DispatchContext = createContext<Dispatch<ActionT>>(
  () => undefined
);

export const ContextProvider: FC<PropsT> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialValues);
  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

//eslint-disable-next-line react/display-name
export const withContextProvider = (Child: FC<PropsT>) => (props: PropsT) => {
  return (
    <ContextProvider>
      <Child {...props} />
    </ContextProvider>
  );
};
