import { ActionT, StateT, THEME_ACTIONS } from "./ThemeTypes";

const themeReducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case THEME_ACTIONS.SWITCH_THEME: {
      return { ...state, isDarkTheme: !state.isDarkTheme };
    }
    case THEME_ACTIONS.CHANGE_SCREEN: {
      return { ...state, isDarkTheme: !state.isDesktop };
    }
    case THEME_ACTIONS.CHANGE_TODOS: {
      return { ...state, todoList: action.payload };
    }
    case THEME_ACTIONS.SELECT_FILTER: {
      return { ...state, selectedFilter: action.payload };
    }
  }
};

export default themeReducer;
