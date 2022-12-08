import { FC } from "react";
import { FILTERS } from "../../../../../constants";
import useFilterLogic from "../../../../../hooks/useFilterLogic";

import "./../../../../../scss/components/_filters.scss";

type FilterT = {
  type: FILTERS;
};
const Filter: FC<FilterT> = ({ type }: FilterT) => {
  const { handleChangeFilter, className } = useFilterLogic(type);

  return (
    <>
      <div className={className} onClick={handleChangeFilter}>
        {type}
      </div>
    </>
  );
};
export default Filter;
