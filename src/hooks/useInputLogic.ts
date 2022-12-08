// import { FC } from "react";

import { KeyboardEvent, RefObject, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoI } from "../model/types";
import useTodosLogic from "./useTodosLogic";

const useInputLogic = () => {
  let inputRef = useRef() as RefObject<HTMLInputElement>;
  let checkboxRef = useRef() as RefObject<HTMLInputElement>;
  const { addTodo } = useTodosLogic();
  const addTodoOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTodo: TodoI = {
        id: uuidv4(),
        title: inputRef?.current?.value || "",
        isCompleted: checkboxRef?.current?.checked || false,
      };
      addTodo(newTodo);
      clearTodo();
    }
  };
  const clearTodo = () => {
    if (inputRef?.current?.value) {
      inputRef.current.value = "";
    }
    if (checkboxRef?.current?.checked) {
      checkboxRef.current.checked = false;
    }
  };

  return {
    addTodoOnEnter,
    clearTodo,
    inputRef,
    checkboxRef,
  };
};

export default useInputLogic;
