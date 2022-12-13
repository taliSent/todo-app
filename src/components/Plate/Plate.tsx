import { FC } from "react";
import ControlPanel from "./ControlPanel/ControlPanel";
import Input from "./Input/Input";
import List from "./List/List";
import "@scss/components/_plate.scss";

const Plate: FC = () => {
  return (
    <div className='plate'>
      <Input />
      <List />
      <ControlPanel />
      <div className='plate__prompt'>Drag and drop to reorder list</div>
    </div>
  );
};
export default Plate;
