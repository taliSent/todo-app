// import { FC } from "react";
import { useContext } from "react";
import { FILTERS } from "../constants";
import { DispatchContext, Context } from "../context/Context";
import { ACTIONS } from "../context/types";

const useFilterLogic = (type: FILTERS) => {
  const { selectedFilter } = useContext(Context);
  const dispatch = useContext(DispatchContext);
  const selectedClass = type === selectedFilter ? "__selected" : "";
  const className = `link filter${selectedClass}`;
  const handleChangeFilter = () =>
    dispatch({ type: ACTIONS.SELECT_FILTER, payload: type });

  return { handleChangeFilter, className };
};

export default useFilterLogic;
