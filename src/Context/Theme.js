import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const LightTheme = {
  background: "#fff",
  color: "#000",
};

const DarkTheme = {
  background: "#000",
  color: "#fff",
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
