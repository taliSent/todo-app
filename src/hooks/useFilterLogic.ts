// import { FC } from "react";
import { useContext } from "react";
import { FILTERS } from "../constants";
import { DispatchContext, ThemeContext } from "../context/ThemeContext";
import { THEME_ACTIONS } from "../context/ThemeTypes";

const useFilterLogic = (type: FILTERS) => {
  const { selectedFilter } = useContext(ThemeContext);
  const dispatch = useContext(DispatchContext);
  const selectedClass = type === selectedFilter ? "__selected" : "";
  const className = `link filter${selectedClass}`;
  const handleChangeFilter = () =>
    dispatch({ type: THEME_ACTIONS.SELECT_FILTER, payload: type });

  return { handleChangeFilter, className };
};

export default useFilterLogic;
