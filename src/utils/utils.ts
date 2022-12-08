import { LOCAL_STORAGE_KEY } from "../constants";
import { ACTIONS, ActionT } from "../context/types";
import { TodoI } from "../model/types";

export const getTodoList = (dispatch: React.Dispatch<ActionT>): TodoI[] => {
  console.log("getTodoList");
  const jsonList: string = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";
  const parcedList = JSON.parse(jsonList);
  dispatch({ type: ACTIONS.CHANGE_TODOS, payload: parcedList });
  return parcedList;
};
