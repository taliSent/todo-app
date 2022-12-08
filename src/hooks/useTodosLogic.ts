// import { FC } from "react";

import { useContext, useEffect } from "react";
import { DispatchContext, ThemeContext } from "../context/ThemeContext";
import { THEME_ACTIONS } from "../context/ThemeTypes";
import { TodoI } from "../model/types";

const LOCAL_STORAGE_KEY = "ToDo App";

const useTodosLogic = () => {
  const dispatch = useContext(DispatchContext);
  const { todoList } = useContext(ThemeContext);

  const setNewTodos = (newTodoList: TodoI[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));
    dispatch({ type: THEME_ACTIONS.CHANGE_TODOS, payload: newTodoList });
  };

  const getTodoList = (): TodoI[] => {
    const jsonList: string = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";
    const parcedList: string = JSON.parse(jsonList);
    dispatch({ type: THEME_ACTIONS.CHANGE_TODOS, payload: parcedList });

    return JSON.parse(jsonList);
  };
  useEffect(() => {
    getTodoList();
  }, []);

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

  // const toggleIsActiveTodo = (id: string) => {
  //   const todos = todoList;
  //   const todo = todos.find((todo) => todo.id === id);
  //   const newTodo = { isCompleted: !todo?.isCompleted, ...todo };
  //   const
  //   setNewTodos(newTodos);
  // };

  const clearDone = () => {
    const todos = todoList;
    const newTodos = todos.filter((item) => item.isCompleted === false);
    setNewTodos(newTodos);
  };

  const filterActive = () => {
    const todos = todoList;
    const newTodos = todos.filter((item) => item.isCompleted === true);
    return newTodos;
  };

  const unfinishedTodos = todoList.filter(
    (item) => item.isCompleted === true
  ).length;
  return { addTodo, deleteTodo, clearDone, filterActive, unfinishedTodos };
};

export default useTodosLogic;
