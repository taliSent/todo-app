import { FILTERS } from "../constants";
import { TodoI } from "../model/types";

export type StateT = {
  todoList: TodoI[];
  selectedFilter: FILTERS;
  isDarkTheme: boolean;
  isDesktop: boolean;
};

export type ActionT = {
  type:
    | THEME_ACTIONS.SWITCH_THEME
    | THEME_ACTIONS.CHANGE_SCREEN
    | THEME_ACTIONS.CHANGE_TODOS
    | THEME_ACTIONS.SELECT_FILTER;
  payload: any;
};

export enum THEME_ACTIONS {
  CHANGE_TODOS,
  SWITCH_THEME,
  CHANGE_SCREEN,
  SELECT_FILTER,
}
