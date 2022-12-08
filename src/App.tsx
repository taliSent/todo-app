import Header from "./components/Header/Header";
import Plate from "./components/Plate/Plate";
import { withThemeContextProvider } from "./context/ThemeContext";
import { FC } from "react";
// import "./scss/main/_index.scss";
import "./index.scss";

const App: FC = () => {
  return (
    <div className='App' data-theme='dark'>
      <Header />
      <Plate />
    </div>
  );
};

export default withThemeContextProvider(App);
