import Header from "./components/Header/Header";
import Plate from "./components/Plate/Plate";
import { DispatchContext, withContextProvider } from "./context/Context";
import { FC, useContext, useEffect } from "react";
import { ACTIONS } from "./context/types";
import { getTodoList } from "./utils/utils";
import "./index.scss";

const App: FC = () => {
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    dispatch({ type: ACTIONS.CHANGE_TODOS, payload: getTodoList(dispatch) });
  }, []);
  return (
    <div className='App' data-theme='dark'>
      <Header />
      <Plate />
    </div>
  );
};

export default withContextProvider(App);
