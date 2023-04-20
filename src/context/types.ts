import { FILTERS } from "../constants";
import { TodoI } from "../model/types";

export type StateT = {
  todoList: TodoI[];
  selectedFilter: FILTERS;
  filteredList: TodoI[];
  isDarkTheme: boolean;
};

export type ActionSwitch = {
  type: ACTIONS.SWITCH_THEME;
};

export type ActionTodos = {
  type: ACTIONS.CHANGE_TODOS;
  payload: TodoI[];
};

export type ActionFilter = {
  type: ACTIONS.SELECT_FILTER;
  payload: FILTERS;
};

export type ActionT = ActionSwitch | ActionTodos | ActionFilter;

export enum ACTIONS {
  CHANGE_TODOS,
  SWITCH_THEME,
  CHANGE_SCREEN,
  SELECT_FILTER,
}
