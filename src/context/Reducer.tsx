import { ActionT, StateT, ACTIONS } from "./types";

const themeReducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case ACTIONS.SWITCH_THEME: {
      return { ...state, isDarkTheme: !state.isDarkTheme };
    }
    case ACTIONS.CHANGE_SCREEN: {
      return { ...state, isDarkTheme: !state.isDesktop };
    }
    case ACTIONS.CHANGE_TODOS: {
      return { ...state, todoList: action.payload };
    }
    case ACTIONS.SELECT_FILTER: {
      return { ...state, selectedFilter: action.payload };
    }
  }
};

export default themeReducer;
