import { ContextTheme, DispatchContextTheme } from "@/context/ContextTheme";
import { useContext } from "react";
import { IMG_URL } from "../constants";

const useTitleLogic = () => {
  const toggleTheme = useContext(DispatchContextTheme);
  const isDarkTheme = useContext(ContextTheme);

  const imgAdress = isDarkTheme
    ? `${IMG_URL}/icon-sun.svg`
    : `${IMG_URL}/icon-moon.svg`;

  return { imgAdress, handleToggleTheme: toggleTheme };
};

export default useTitleLogic;
