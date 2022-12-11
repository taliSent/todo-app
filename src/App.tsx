import { FC, useEffect } from "react";
import Header from "./components/Header/Header";
import Plate from "./components/Plate/Plate";
import { withContextProvider } from "./context/Context";
import useAppLogic from "./hooks/useAppLogic";
import "./index.scss";

const App: FC = () => {
  const { themeName } = useAppLogic();
  return (
    <div className={`App App--${themeName}`}>
      <Header />
      <Plate />
    </div>
  );
};

export default withContextProvider(App);
