import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { ThemeContext } from "../Context/Theme";
import React, { useState, useContext, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Drawer from "./Drawer";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, setValue] = useState("/");

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const handleExercisesClick = (event) => {
    event.preventDefault();
    const exercisesSection = document.getElementById("exercises");
    exercisesSection.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 900);
  };

  const Pages = [
    { label: "Home", path: "/" },
    { label: "Exercises", path: "/exercises" },
    { label: "Blogs", path: "/blogs" },
  ];
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.background,
          borderBottom: "1px solid white",
          boxShadow: 4,
          opacity: "0.9",
          position: "sticky",
          top: 0,
        }}
      >
        <Toolbar>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "48px",
                height: "48px",
                margin: "0 20px",
              }}
            />
          </Link>

          <Tabs
            textColor={theme.color}
            TabIndicatorProps={{
              style: { background: "#855ff2", height: "3.5px" },
            }}
            value={value}
            onChange={handleTabChange}
            sx={{
              marginLeft: "auto",
              visibility: { lg: "visible", xs: "hidden" },
            }}
          >
            {Pages.map((page) => (
              <Tab
                key={page.path}
                label={page.label}
                value={page.path}
                sx={{
                  fontWeight: "900",
                  fontSize: "17px",
                  margin: "0px 15px",
                  color: theme.color,
                }}
                component={Link}
                to={page.path}
                onClick={
                  page.path === "/exercises" ? handleExercisesClick : null
                }
              />
            ))}
          </Tabs>
          <Button
            onClick={toggleTheme}
            sx={{
              color: theme.color,
              borderRadius: "100px",
              marginLeft: "auto",
            }}
          >
            {theme.icon}
          </Button>
          <a href="https://github.com/vivekrawat21/Fitness-web-app" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                color: theme.color,
                width: "5px",
                borderRadius: "100px",
                marginLeft: "5px",
              }}
            >
              <GitHubIcon />
            </Button>
          </a>

          <Drawer />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
