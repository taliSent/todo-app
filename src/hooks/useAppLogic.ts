import { useContext, useEffect } from "react";
import { Context, DispatchContext } from "@/context/Context";
import { getTodoList } from "@/utils/utils";

const useAppLogic = () => {
  const dispatch = useContext(DispatchContext);
  const { isDarkTheme } = useContext(Context);
  useEffect(() => {
    getTodoList(dispatch);
  }, []);

  return { themeName: isDarkTheme ? "dark" : "light" };
};

export default useAppLogic;
