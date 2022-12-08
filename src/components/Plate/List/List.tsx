import { FC, useContext } from "react";
import Task from "./Todo/Task";
import { ThemeContext } from "../../../context/ThemeContext";
import "./../../../scss/components/_list.scss";

const List: FC = () => {
  const { todoList } = useContext(ThemeContext);
  return (
    <ul className='list'>
      {todoList.map((props) => (
        <Task key={props.id} {...props} />
      ))}
    </ul>
  );
};
export default List;
