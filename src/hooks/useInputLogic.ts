// import { FC } from "react";
import { KeyboardEvent, RefObject, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoI } from "../model/types";
import useTodosLogic from "./useTodosLogic";

const useInputLogic = () => {
  const inputRef = useRef() as RefObject<HTMLInputElement>;
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const { addTodo } = useTodosLogic();
  const addTodoOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!inputRef?.current?.value) return;
    if (e.key === "Enter") {
      e.preventDefault();
      const newTodo: TodoI = {
        id: uuidv4(),
        title: inputRef?.current?.value || "",
        isCompleted: checkboxChecked,
      };
      addTodo(newTodo);
      clearTodo();
    }
  };
  const clearTodo = () => {
    if (inputRef?.current?.value) {
      inputRef.current.value = "";
    }
    setCheckboxChecked(false);
  };

  return {
    addTodoOnEnter,
    clearTodo,
    inputRef,
    isChecked: checkboxChecked,
    toggleIsCompletedTodo: () => setCheckboxChecked((prev) => !prev),
    // checkboxRef,
  };
};

export default useInputLogic;
