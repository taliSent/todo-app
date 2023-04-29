import { FILTERS } from "../constants";
import { TodoI } from "../model/types";

export type StateTodosT = {
  todoList: TodoI[];
  selectedFilter: FILTERS;
  filteredList: TodoI[];
};

export type StateThemeT = {
  isDarkTheme: boolean;
};

export type ActionTodos = {
  type: ACTIONS.CHANGE_TODOS;
  payload: TodoI[];
};

export type ActionFilter = {
  type: ACTIONS.SELECT_FILTER;
  payload: FILTERS;
};

export type ActionT = ActionTodos | ActionFilter;

export enum ACTIONS {
  CHANGE_TODOS,
  SWITCH_THEME,
  CHANGE_SCREEN,
  SELECT_FILTER,
}
