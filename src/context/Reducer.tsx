import { filterList } from "../utils/utils";
import { ActionT, StateT, ACTIONS } from "./types";

const themeReducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case ACTIONS.SWITCH_THEME: {
      return { ...state, isDarkTheme: !state.isDarkTheme };
    }
    case ACTIONS.CHANGE_TODOS: {
      return {
        ...state,
        todoList: action.payload,
        filteredList: filterList(action.payload, state.selectedFilter),
      };
    }
    case ACTIONS.SELECT_FILTER: {
      return {
        ...state,
        selectedFilter: action.payload,
        filteredList: filterList(state.todoList, action.payload),
      };
    }
  }
};

export default themeReducer;
