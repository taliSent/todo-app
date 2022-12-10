import { useContext } from "react";
import { IMG_URL } from "../constants";
import { Context, DispatchContext } from "../context/Context";
import { ACTIONS } from "../context/types";

const useTitleLogic = () => {
  const dispatch = useContext(DispatchContext);
  const { isDarkTheme } = useContext(Context);
  const handleToggleTheme = () => {
    dispatch({ type: ACTIONS.SWITCH_THEME });
  };
  const imgAdress = isDarkTheme
    ? `${IMG_URL}/icon-sun.svg`
    : `${IMG_URL}/icon-moon.svg`;

  return { imgAdress, handleToggleTheme };
};

export default useTitleLogic;
