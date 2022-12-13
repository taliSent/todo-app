import { FC } from "react";
import useTodosLogic from "@hooks/useTodosLogic";
import WithCheckbox from "../../../Checkbox/Checkbox";
import "@scss/components/_task.scss";

type TaskT = {
  title: string;
  isCompleted: boolean;
  id: string;
};

const Task: FC<TaskT> = ({ title, isCompleted, id }: TaskT) => {
  const { toggleIsCompletedTodo } = useTodosLogic();
  const handleClick = () => toggleIsCompletedTodo(id);
  const className = `task task--${isCompleted ? "completed" : ""}`;
  return (
    <div className={className}>
      <WithCheckbox isChecked={isCompleted} id={id} clearTodo={() => {}}>
        <div className='task__text' onClick={handleClick}>
          {title}
        </div>
      </WithCheckbox>
    </div>
  );
};
export default Task;
