import {DEFAULT_THEME} from "./constants.js";
import {useCallback, useState} from "react";
import {ThemeContext} from "./context.js";


export const ThemeProvider = ({ children, defaultTheme = DEFAULT_THEME }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = useCallback(() => {
      setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }, []);

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
      </ThemeContext.Provider>
  );
};