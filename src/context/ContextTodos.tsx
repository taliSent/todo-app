import { createContext, Dispatch, FC, ReactNode, useReducer } from "react";
import { FILTERS } from "../constants";
import themeReducer from "./Reducer";
import { ActionT, StateTodosT } from "./types";

const initialValues: StateTodosT = {
  todoList: [],
  selectedFilter: FILTERS.ALL,
  filteredList: [],
};

type PropsT = {
  children?: ReactNode;
};

export const ContextTodos = createContext(initialValues);
export const DispatchContextTodos = createContext<Dispatch<ActionT>>(
  () => undefined
);

export const ContextProvider: FC<PropsT> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialValues);
  return (
    <DispatchContextTodos.Provider value={dispatch}>
      <ContextTodos.Provider value={state}>{children}</ContextTodos.Provider>
    </DispatchContextTodos.Provider>
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
