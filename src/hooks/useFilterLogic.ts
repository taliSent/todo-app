// import { FC } from "react";
import { useContext } from "react";
import { FILTERS } from "../constants";
import { ContextTodos, DispatchContextTodos } from "../context/ContextTodos";
import { ACTIONS } from "../context/types";

const useFilterLogic = (type: FILTERS) => {
  const { selectedFilter } = useContext(ContextTodos);
  const dispatch = useContext(DispatchContextTodos);
  const selectedClass = type === selectedFilter ? "__selected" : "";
  const className = `link filter${selectedClass}`;
  const handleChangeFilter = () =>
    dispatch({ type: ACTIONS.SELECT_FILTER, payload: type });

  return { handleChangeFilter, className };
};

export default useFilterLogic;
