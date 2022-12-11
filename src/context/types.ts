import { FILTERS } from "../constants";
import { TodoI } from "../model/types";

export type StateT = {
  todoList: TodoI[];
  selectedFilter: FILTERS;
  filteredList: TodoI[];
  isDarkTheme: boolean;
};

export type ActionT = {
  type: ACTIONS.SWITCH_THEME | ACTIONS.CHANGE_TODOS | ACTIONS.SELECT_FILTER;
  payload?: any;
};

export enum ACTIONS {
  CHANGE_TODOS,
  SWITCH_THEME,
  CHANGE_SCREEN,
  SELECT_FILTER,
}
