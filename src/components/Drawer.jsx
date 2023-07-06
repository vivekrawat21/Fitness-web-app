import React from "react";
import { useState, useContext } from "react";
import Drrawer from "@mui/material/Drawer";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../Context/Theme";
import { Link } from "react-router-dom";
function Drawer() {
  const { theme } = useContext(ThemeContext);
  const [openDrawer, SetOpenDrawer] = useState(false);

  return (
    <>
      <React.Fragment>
        <Drrawer
          open={openDrawer}
          onClose={() => SetOpenDrawer(false)}
          variant="temporary"
          PaperProps={{
            sx: {
              color: "rgba(225,249,27,1)",
            },
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "50%",
              backgroundColor: "#512DA8",
              alignItems: "center",
              paddingTop: "4%",
            },
          }}
        >
          <List>
            {
              <ListItemButton onClick={() => SetOpenDrawer(false)}>
                <ListItemIcon>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    <ListItemText>Home</ListItemText>
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            }
            <hr></hr>

            {
              <ListItemButton onClick={() => SetOpenDrawer(false)}>
                <ListItemIcon>
                  <a
                    href="#exercises"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText>Exercises</ListItemText>
                  </a>
                </ListItemIcon>
              </ListItemButton>
            }
            <hr></hr>
            {
              <ListItemButton onClick={() => SetOpenDrawer(false)}>
                <ListItemIcon>
                  <Link
                    to="/blogs"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItemText>Blogs</ListItemText>
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            }
            <hr></hr>
          </List>
        </Drrawer>

        <MenuIcon
          onClick={() => SetOpenDrawer(!openDrawer)}
          sx={{
            visibility: { lg: "hidden", xs: "visible" },
            cursor: "pointer",
            marginLeft: "100px",
            color: theme.color,
          }}
        />
      </React.Fragment>
    </>
  );
}

export default Drawer;
