import { useContext } from "react";
import { Context } from "../../../../context/Context";
import { getBackgroundSrc } from "../../utils/utils";
// FIX ME: imports
import "./../../../../scss/components/_background-image.scss";

const BackgroundImage = () => {
  const { isDarkTheme } = useContext(Context);
  // FIX ME: add new themes & screen sizes
  return (
    <>
      <img
        src={getBackgroundSrc(isDarkTheme)}
        alt='background'
        className='background-image'
      />
    </>
  );
};
export default BackgroundImage;
