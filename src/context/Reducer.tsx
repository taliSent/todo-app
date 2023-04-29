import { ActionT, StateTodosT, ACTIONS } from "./types";
import { filterList } from "./utils";

const themeReducer = (state: StateTodosT, action: ActionT) => {
  switch (action.type) {
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
