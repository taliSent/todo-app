import { FC, InputHTMLAttributes, ReactElement } from "react";
import { IMG_URL } from "@/constants";
import "@/scss/components/_checkbox.scss";

interface CheckboxI extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactElement;
  isChecked: boolean;
  id?: string;
  deleteTodo?: (id: string) => void;
  toggleIsCompletedTodo: (id?: string) => void;
  clearTodo?: () => void;
}
//TODO: fix TS
const WithCheckbox: FC<CheckboxI> = (props) => {
  const {
    children,
    isChecked,
    id,
    toggleIsCompletedTodo,
    clearTodo,
    deleteTodo,
    ...restProps
  } = props;
  return (
    <div className='container'>
      <div
        className={`container__checkmark container__checkmark--${
          isChecked ? "checked" : "unchecked"
        }`}
        onClick={() => {
          toggleIsCompletedTodo(id);
        }}
      >
        <input
          type='checkbox'
          className='container__checkmark__checkbox'
          aria-label='check to toggle if todo is done'
          checked={isChecked}
          {...restProps}
        />
        {isChecked && (
          <img
            className={`container__checkmark__icon-done`}
            alt={`icon-done`}
            src={`${IMG_URL}/icon-check.svg`}
          />
        )}
      </div>
      <>{children}</>
      <img
        src={`${IMG_URL}/icon-cross.svg`}
        alt='button to clear input/delete a task'
        className='container__cross'
        onClick={() => (id ? deleteTodo?.(id) : clearTodo?.())}
      />
    </div>
  );
};

WithCheckbox.displayName = "WithCheckbox";

export default WithCheckbox;
