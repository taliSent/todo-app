import { FILTERS } from "@/constants";
import { TodoI } from "@/model/types";

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
