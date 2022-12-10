import { useContext, useEffect } from "react";
import { Context, DispatchContext } from "../context/Context";
import { ACTIONS } from "../context/types";
import { getTodoList } from "../utils/utils";

const useAppLogic = () => {
  const dispatch = useContext(DispatchContext);
  const { isDarkTheme } = useContext(Context);
  useEffect(() => {
    dispatch({ type: ACTIONS.CHANGE_TODOS, payload: getTodoList(dispatch) });
  }, []);

  return { themeName: isDarkTheme ? "dark" : "light" };
};

export default useAppLogic;
