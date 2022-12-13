import { FILTERS, LOCAL_STORAGE_KEY } from "../constants";
import { ACTIONS, ActionT } from "../context/types";
import { TodoI } from "../model/types";

export const getTodoList = (dispatch: React.Dispatch<ActionT>): TodoI[] => {
  const jsonList: string = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";
  const parcedList = JSON.parse(jsonList);
  dispatch({ type: ACTIONS.CHANGE_TODOS, payload: parcedList });
  return parcedList;
};

export const setNewTodos =
  (dispatch: React.Dispatch<ActionT>) => (newTodoList: TodoI[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));
    dispatch({ type: ACTIONS.CHANGE_TODOS, payload: newTodoList });
  };

export const filterList = (todoList: TodoI[], selectedFilter: FILTERS) => {
  switch (selectedFilter) {
    case FILTERS.ALL: {
      return todoList;
    }
    case FILTERS.COMPLETED: {
      return todoList.filter((item: TodoI) => item.isCompleted === true);
    }
    case FILTERS.ACTIVE: {
      return todoList.filter((item: TodoI) => item.isCompleted === false);
    }
  }
};
