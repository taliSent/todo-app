import { FC } from "react";
import { Reorder } from "framer-motion";
import useTodosLogic from "@/hooks/useTodosLogic";
import Task from "./Todo/Task";
import "@/scss/components/_list.scss";

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
