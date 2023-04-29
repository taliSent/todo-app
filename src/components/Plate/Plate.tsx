import { FC } from "react";
import ControlPanel from "./ControlPanel/ControlPanel";
import InputWithCheckbox from "./InputWithCheckbox/InputWithCheckbox";
import List from "./List/List";
import "@/scss/components/_plate.scss";
import { withContextProvider } from "@/context/ContextTodos";

const Plate: FC = () => {
  return (
    <div className='plate'>
      <InputWithCheckbox />
      <List />
      <ControlPanel />
      <div className='plate__prompt'>Drag and drop to reorder list</div>
    </div>
  );
};
export default withContextProvider(Plate);
