import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { ThemeContext } from "../Context/Theme"; 

const Navbar = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"

        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
          // backgroundColor: theme.background,
          // color: theme.color,
        }}
        px="20px"
      >
        <Link to="/">
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

        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
