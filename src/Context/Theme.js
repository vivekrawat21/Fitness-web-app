import React, { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);

  //   Rough Colors

  const LightTheme = {
    background: "#fff",
    color: "#000",
  };

  const DarkTheme = {
    background: "#000",
    color: "#fff",
  };

  const ToggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
