import { FC } from "react";
import useTodosLogic from "@hooks/useTodosLogic";
import Filters from "./components/Filters";
import "@scss/components/_control-panel.scss";
import "@scss/components/_link.scss";

const ControlPanel: FC = () => {
  const { incompleteCount, clearCompleted } = useTodosLogic();

  return (
    <div className='control-panel'>
      <div className='control-panel__incomplete-count'>{`${incompleteCount} items left`}</div>
      <Filters />
      <span className='link' onClick={clearCompleted}>
        Clear completed
      </span>
    </div>
  );
};
export default ControlPanel;
