import { FC, useContext } from "react";
import { Context } from "src/context/Context";
import { getBackgroundSrc } from "../../utils/utils";
// FIX ME: imports
import "./../../../../scss/components/_background-image.scss";

const BackgroundImage: FC = () => {
  const { isDarkTheme } = useContext(Context);
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
