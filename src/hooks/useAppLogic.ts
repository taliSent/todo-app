import { useContext, useEffect } from "react";
import { getTodoList } from "@/utils/utils";
import { ContextTheme } from "@/context/ContextTheme";
import { DispatchContextTodos } from "@/context/ContextTodos";

const useAppLogic = () => {
  const dispatch = useContext(DispatchContextTodos);
  const isDarkTheme = useContext(ContextTheme);
  useEffect(() => {
    getTodoList(dispatch);
  }, []);

  return { themeName: isDarkTheme ? "dark" : "light" };
};

export default useAppLogic;
