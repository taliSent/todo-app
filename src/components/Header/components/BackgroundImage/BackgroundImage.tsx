import { useContext, useEffect } from "react";
import { Context } from "../../../../context/Context";
import { getBackgroundSrc } from "../utils";
// FIX ME: imports
import "./../../../../scss/components/_background-image.scss";

const BackgroundImage = () => {
  const { isDarkTheme } = useContext(Context);
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
