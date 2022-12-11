import { useContext, useMemo } from "react";
import { FILTERS } from "../constants";
import { Context, DispatchContext } from "../context/Context";
import { TodoI } from "../model/types";
import { setNewTodos } from "../utils/utils";

const useTodosLogic = () => {
  // TODO: add typization to all the hooks
  const dispatch = useContext(DispatchContext);
  const { todoList, filteredList } = useContext(Context);
  const updateTodos = setNewTodos(dispatch);

  const addTodo = (todo: TodoI) => {
    const todos = [...todoList];
    todos.unshift(todo);
    updateTodos(todos);
  };

  const deleteTodo = (id: string) => {
    const todos = [...todoList];
    const newTodos = todos.filter((item) => item.id !== id);
    updateTodos(newTodos);
  };

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
    filteredList,
    incompleteCount,
  };
};

export default useTodosLogic;
