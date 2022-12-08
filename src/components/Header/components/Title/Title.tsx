import { useContext } from "react";
import { IMG_URL } from "../../../../constants";
import { DispatchContext } from "../../../../context/ThemeContext";
import "./../../../../scss/components/_title.scss";

const TITLE = "T O D O";

const Title = () => {
  const dispatch = useContext(DispatchContext);
  const handleChangeTheme = () => {};
  //THEME_ACTIONS.SWITCH_THEME
  return (
    <h1 className="title">
      <div>{TITLE}</div>
      <img
        src={`${IMG_URL}/icon-sun.svg`}
        className="toggle-theme-icon"
        onClick={handleChangeTheme}
      />
    </h1>
  );
};
export default Title;
