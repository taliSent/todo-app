import { FC } from "react";
import WithCheckbox from "../../../Checkbox/Checkbox";
import "@/scss/components/_task.scss";

type TaskT = {
  title: string;
  isCompleted: boolean;
  id: string;
};

const Task: FC<TaskT> = ({ title, isCompleted, id }: TaskT) => {
  const className = `task task--${isCompleted ? "completed" : ""}`;
  return (
    <div className={className}>
      <WithCheckbox isChecked={isCompleted} id={id}>
        <div className='task__text'>{title}</div>
      </WithCheckbox>
    </div>
  );
};
export default Task;
