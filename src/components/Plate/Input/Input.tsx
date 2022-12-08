import { FC, KeyboardEvent } from "react";
import useInputLogic from "../../../hooks/useInputLogic";
import WithCheckbox from "../../Checkbox/Checkbox";
import "../../../scss/components/_input.scss";

const Input: FC = () => {
  const { addTodoOnEnter, clearTodo, inputRef, checkboxRef } = useInputLogic();

  return (
    <div className='input'>
      <WithCheckbox ref={checkboxRef} clearTodo={clearTodo}>
        <input
          className='input__text'
          ref={inputRef}
          type='text'
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => addTodoOnEnter(e)}
        />
      </WithCheckbox>
    </div>
  );
};
export default Input;
