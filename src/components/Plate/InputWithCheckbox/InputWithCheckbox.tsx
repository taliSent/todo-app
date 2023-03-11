import { FC, InputHTMLAttributes, KeyboardEvent } from "react";
import useInputLogic from "@/hooks/useInputLogic";
import WithCheckbox from "../../Checkbox/Checkbox";
import "@/scss/components/_input.scss";

type InputWithCheckboxT = {
  propsInput?: InputHTMLAttributes<HTMLInputElement>;
  propsCheckbox?: InputHTMLAttributes<HTMLInputElement>;
};

const Input: FC<InputWithCheckboxT> = ({
  propsInput,
  propsCheckbox,
}: InputWithCheckboxT) => {
  const { addTodoOnEnter, clearTodo, inputRef, checkboxRef } = useInputLogic();

  return (
    <div className='input'>
      <WithCheckbox ref={checkboxRef} clearTodo={clearTodo} {...propsCheckbox}>
        <input
          className={`input__html ${propsInput?.className}`}
          aria-label='type your todo'
          ref={inputRef}
          type='text'
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => addTodoOnEnter(e)}
          {...propsInput}
        />
      </WithCheckbox>
    </div>
  );
};
export default Input;
