import { useContext, useMemo } from "react";
import { FILTERS } from "../constants";
import { Context, DispatchContext } from "../context/Context";
import { TodoI } from "../model/types";
import { setNewTodos } from "../utils/utils";

const useTodosLogic = () => {
  // TODO: improve performance
  // TODO: add typization to all the hooks
  const dispatch = useContext(DispatchContext);
  const updateTodos = setNewTodos(dispatch);
  const { todoList, selectedFilter } = useContext(Context);

  const addTodo = (todo: TodoI) => {
    const todos = [...todoList];
    todos.push(todo);
    updateTodos(todos);
  };

  const deleteTodo = (id: string) => {
    const todos = [...todoList];
    const newTodos = todos.filter((item) => item.id !== id);
    updateTodos(newTodos);
  };

  const filteredList = useMemo(() => {
    console.log("filteredList", todoList, selectedFilter);
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
  }, [selectedFilter, todoList]);

  const clearCompleted = () => {
    const todos = [...todoList];
    const newTodos = todos.filter((item) => item.isCompleted === false);
    updateTodos(newTodos);
  };

  const toggleIsCompletedTodo = (id: string | undefined) => {
    if (id === undefined) return;
    const todos = [...todoList];
    const todo = todos.find((todo) => todo.id === id);
    if (todo?.id === undefined) return;
    const newTodo = { ...todo, isCompleted: !todo?.isCompleted };
    const index = todos.findIndex((item) => item.id === id);
    todos.splice(index, 1, newTodo);
    updateTodos(todos);
  };

  const incompleteCount = todoList.filter(
    (item) => item.isCompleted === false
  ).length;

  return {
    addTodo,
    deleteTodo,
    clearCompleted,
    updateTodos,
    toggleIsCompletedTodo,
    incompleteCount,
    filteredList,
  };
};

export default useTodosLogic;
