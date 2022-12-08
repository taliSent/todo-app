import { FC, useContext, useEffect } from "react";
import Task from "./Todo/Task";
import { Context } from "../../../context/Context";
import "./../../../scss/components/_list.scss";
import useTodosLogic from "../../../hooks/useTodosLogic";

const List: FC = () => {
  const { filteredList } = useTodosLogic();
  return (
    <ul className='list'>
      {filteredList.map((props) => (
        <Task key={props.id} {...props} />
      ))}
    </ul>
  );
};
export default List;
