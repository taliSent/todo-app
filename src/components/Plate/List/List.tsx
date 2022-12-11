import { FC, useContext, useEffect } from "react";
import Task from "./Todo/Task";
import { Context } from "../../../context/Context";
import "./../../../scss/components/_list.scss";
import useTodosLogic from "../../../hooks/useTodosLogic";
import { Reorder } from "framer-motion";

const List: FC = () => {
  const { filteredList, updateTodos } = useTodosLogic();
  return (
    <Reorder.Group
      axis='y'
      values={filteredList}
      onReorder={updateTodos}
      className='list'
    >
      {filteredList.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <Task key={item.id} {...item} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
export default List;
