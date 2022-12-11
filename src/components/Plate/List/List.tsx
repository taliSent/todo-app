import { Reorder } from "framer-motion";
import { FC } from "react";
import useTodosLogic from "../../../hooks/useTodosLogic";
import "./../../../scss/components/_list.scss";
import Task from "./Todo/Task";

const List: FC = () => {
  const { updateTodos, filteredList } = useTodosLogic();

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
