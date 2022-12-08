import { FC } from "react";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { FILTERS, LOCAL_STORAGE_KEY } from "../constants";
import { DispatchContext, Context } from "../context/Context";
import { ACTIONS } from "../context/types";
import { TodoI } from "../model/types";

const useTodosLogic = () => {
  // TODO: improve performance
  // TODO: add typization
  const dispatch = useContext(DispatchContext);
  const { todoList, selectedFilter } = useContext(Context);

  const setNewTodos = (newTodoList: TodoI[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));
    dispatch({ type: ACTIONS.CHANGE_TODOS, payload: newTodoList });
  };

  const addTodo = (todo: TodoI) => {
    const todos = todoList;
    todos.push(todo);
    setNewTodos(todos);
  };

  const deleteTodo = (id: string) => {
    const todos = todoList;
    const newTodos = todos.filter((item) => item.id !== id);
    setNewTodos(newTodos);
  };

  const filteredList = useMemo(() => {
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
    const todos = todoList;
    const newTodos = todos.filter((item) => item.isCompleted === false);
    setNewTodos(newTodos);
  };

  const incompleteCount = todoList.filter(
    (item) => item.isCompleted === false
  ).length;

  return {
    addTodo,
    deleteTodo,
    clearCompleted,
    incompleteCount,
    filteredList,
  };
};

export default useTodosLogic;
