import React, { createContext, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

const ThemeContext = createContext();

const LightTheme = {
  background: "#fff",
  color: "#000",
  icon: <NightlightIcon />,
};

const DarkTheme = {
  background: "#000",
  color: "#fff",
  icon: <LightModeIcon />,
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
