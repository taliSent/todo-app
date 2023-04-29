import { FC } from "react";
import Header from "./components/Header/Header";
import Plate from "./components/Plate/Plate";
import useAppLogic from "./hooks/useAppLogic";
import "./index.scss";
import { withContextThemeProvider } from "./context/ContextTheme";

const App: FC = () => {
  const { themeName } = useAppLogic();
  return (
    <div className={`App App--${themeName}`}>
      <Header />
      <Plate />
    </div>
  );
};

export default withContextThemeProvider(App);
