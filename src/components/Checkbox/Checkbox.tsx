import { forwardRef, memo, ReactElement } from "react";
import { IMG_URL } from "../../constants";
import useTodosLogic from "../../hooks/useTodosLogic";
import "./../../scss/components/_checkbox.scss";

type TCheckbox = {
  children: ReactElement<any, any>;
  id?: string;
  isChecked?: boolean;
  clearTodo?: () => void;
};

const WithCheckbox = forwardRef<HTMLInputElement, TCheckbox>((props, ref) => {
  const { children, isChecked, id, clearTodo } = props;
  const { deleteTodo } = useTodosLogic();

  return (
    <label className='container'>
      <>{children}</>
      <div className='container__checkmark' />
      <input
        type='checkbox'
        className='container__checkbox'
        checked={isChecked}
        readOnly={!!id}
        ref={ref}
      />
      <img
        src={`${IMG_URL}/icon-cross.svg`}
        className='container__cross'
        onClick={() => (id ? deleteTodo(id) : clearTodo())}
      />
    </label>
  );
});

export default WithCheckbox;
//memo?
