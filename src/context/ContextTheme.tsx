import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IS_DEFAULT_DARK } from "@/constants";

type PropsT = {
  children?: ReactNode;
};
export const ContextTheme = createContext<boolean>(false);
export const DispatchContextTheme = createContext<
  Dispatch<SetStateAction<(value: boolean) => void>>
>(() => undefined);

export const ContextThemeProvider: FC<PropsT> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(IS_DEFAULT_DARK);
  const toggleTheme: () => void = () => setIsDarkTheme((prev) => !prev);
  return (
    <DispatchContextTheme.Provider value={toggleTheme}>
      <ContextTheme.Provider value={isDarkTheme}>
        {children}
      </ContextTheme.Provider>
    </DispatchContextTheme.Provider>
  );
};

export const withContextThemeProvider =
  // eslint-disable-next-line react/display-name
  (Child: FC<PropsT>) => (props: PropsT) => {
    return (
      <ContextThemeProvider>
        <Child {...props} />
      </ContextThemeProvider>
    );
  };
