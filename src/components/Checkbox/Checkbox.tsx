import { forwardRef, ReactElement } from "react";
import { IMG_URL } from "../../constants";
import useTodosLogic from "../../hooks/useTodosLogic";
import "./../../scss/components/_checkbox.scss";

type CheckboxT = {
  children: ReactElement<any, any>;
  id?: string;
  isChecked?: boolean;
  clearTodo?: () => void;
};

const WithCheckbox = forwardRef<HTMLInputElement, CheckboxT>((props, ref) => {
  const { children, isChecked, id, clearTodo } = props;
  const { deleteTodo, toggleIsCompletedTodo } = useTodosLogic();
  //TODO: fix ts error
  return (
    <label className='container'>
      <>{children}</>
      <div className='container__checkmark'>
        <input
          type='checkbox'
          className='container__checkbox'
          checked={isChecked}
          onClick={() => toggleIsCompletedTodo(id)}
          readOnly={!!id}
          ref={ref}
        />
      </div>
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
