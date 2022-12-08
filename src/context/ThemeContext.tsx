import { createContext, Dispatch, FunctionComponent, useReducer } from "react";
import { FILTERS } from "../constants";
import themeReducer from "./ThemeReducer";
import { ActionT, StateT } from "./ThemeTypes";

const initialValues: StateT = {
  //TODO: custom
  todoList: [],
  selectedFilter: FILTERS.ALL,
  isDarkTheme: true,
  isDesktop: true,
};

export const ThemeContext = createContext(initialValues);
export const DispatchContext = createContext<Dispatch<ActionT>>(() => {});

export const ThemeContextProvider: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialValues);
  return (
    <DispatchContext.Provider value={dispatch}>
      <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    </DispatchContext.Provider>
  );
};

export const withThemeContextProvider = (Child: any) => (props: any) => {
  return (
    <ThemeContextProvider>
      <Child {...props} />
    </ThemeContextProvider>
  );
};
