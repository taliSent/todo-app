import {
  createContext,
  Dispatch,
  FunctionComponent,
  useEffect,
  useReducer,
} from "react";
import { FILTERS } from "../constants";
import { getTodoList } from "../utils/utils";
import themeReducer from "./Reducer";
import { ACTIONS, ActionT, StateT } from "./types";

const initialValues: StateT = {
  //TODO: custom
  todoList: [],
  selectedFilter: FILTERS.ALL,
  isDarkTheme: true,
  isDesktop: true,
};

export const Context = createContext(initialValues);
export const DispatchContext = createContext<Dispatch<ActionT>>(() => {});

export const ContextProvider: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialValues);
  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export const withContextProvider = (Child: any) => (props: any) => {
  return (
    <ContextProvider>
      <Child {...props} />
    </ContextProvider>
  );
};
