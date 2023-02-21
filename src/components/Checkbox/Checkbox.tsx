import { forwardRef, ReactElement } from "react";
import { IMG_URL } from "@/constants";
import useTodosLogic from "@/hooks/useTodosLogic";
import "@/scss/components/_checkbox.scss";

type CheckboxT = {
  children: ReactElement;
  isChecked?: boolean;
  id?: string;
  clearTodo?: () => void;
};

const WithCheckbox = forwardRef<HTMLInputElement, CheckboxT>((props, ref) => {
  const { children, isChecked, id, clearTodo } = props;
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
          onClick={() => toggleIsCompletedTodo(id)}
          readOnly={!!id}
          ref={ref}
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
