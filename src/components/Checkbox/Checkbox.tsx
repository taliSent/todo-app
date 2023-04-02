import { forwardRef, InputHTMLAttributes, ReactElement } from "react";
import { IMG_URL } from "@/constants";
import useTodosLogic from "@/hooks/useTodosLogic";
import "@/scss/components/_checkbox.scss";

interface CheckboxI extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactElement;
  isChecked?: boolean;
  id?: string;
  clearTodo?: () => void;
}

const WithCheckbox = forwardRef<HTMLInputElement, CheckboxI>((props, ref) => {
  const { children, isChecked, id, clearTodo, ...restProps } = props;
  const { deleteTodo, toggleIsCompletedTodo } = useTodosLogic();
  return (
    <label className='container'>
      <>{children}</>
      <div className='container__checkmark'>
        <input
          type='checkbox'
          className='container__checkbox'
          aria-label='check to toggle if todo is done'
          checked={isChecked}
          onChange={() => toggleIsCompletedTodo(id)}
          ref={ref}
          {...restProps}
        />
      </div>
      <img
        src={`${IMG_URL}/icon-cross.svg`}
        alt='button to clear input/delete a task'
        className='container__cross'
        onClick={() => (id ? deleteTodo(id) : clearTodo?.())}
      />
    </label>
  );
});

WithCheckbox.displayName = "WithCheckbox";

export default WithCheckbox;
