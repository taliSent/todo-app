import { ContextTheme } from "@/context/ContextTheme";
import "@/scss/components/_background-image.scss";
import { FC, useContext } from "react";
import { getBackgroundSrc } from "../../utils/utils";

const BackgroundImage: FC = () => {
  const isDarkTheme = useContext(ContextTheme);
  return (
    <img
      src={getBackgroundSrc(isDarkTheme)}
      alt='background'
      className='background-image'
    />
  );
};
export default BackgroundImage;
