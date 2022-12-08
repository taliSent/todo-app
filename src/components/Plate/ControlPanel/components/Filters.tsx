import { FC } from "react";
import { ALL_FILTERS } from "../../../../constants";
import Filter from "./components/Filter";
import "./../../../../scss/components/_filters.scss";

const Filters: FC = () => {
  return (
    <div className='filters'>
      {ALL_FILTERS.map((item) => (
        <Filter type={item} key={item} />
      ))}
    </div>
  );
};
export default Filters;
