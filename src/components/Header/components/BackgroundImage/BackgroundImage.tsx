import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { getBackgroundSrc } from "../utils";
// FIX ME: imports
import "./../../../../scss/components/_background-image.scss";

const BackgroundImage = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  // FIX ME: add new themes & screen sizes
  useEffect(() => {
    console.log("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <>
      <img
        src={getBackgroundSrc(isDarkTheme, true)}
        alt='background'
        className='background-image'
      />
    </>
  );
};
export default BackgroundImage;
