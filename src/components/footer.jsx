import React from "react";

import Logo1 from "../assets/images/lo.png";
import ReactLogo from "../assets/icons/react-logo-1.png";
import RapidApi from "../assets/icons/rapidapi-icon.svg";
import { Box, Stack, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MaterialUi from "../assets/icons/material-ui-1.svg";
import LaunchIcon from "@mui/icons-material/Launch";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#111827">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
        mx={{ lg: "40px", xs: "20px" }}
      >
        <Stack
          alignItems="center"
          direction="column"
          spacing={{ lg: 2, xs: 1, sm: 2, md: 4 }}
        >
          <Typography
            component={motion.div}
            sx={{
              fontWeight: "660",
              fontSize: { lg: "25px", xs: "16px" },
              "&:hover": { borderBottom: "2px solid white ",color:"#6339f5" },
            }}
            color="white"
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            Social links
          </Typography>
          <motion.div
            style={{ display: "flex" }}
            component={motion.div}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <a href="https://www.linkedin.com/feed/" rel="noreferrer" target="_blank">
              <Button
                sx={{
                  backgroundColor: "inherit",
                  color: "white",
                  borderRadius: "100px",
                  marginLeft: { lg: "5px", xs: "3px" },
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <LinkedInIcon  sx={{'&:hover':{color:"#6339f5"}}}/>
              </Button>
            </a>
            <a href="https://twitter.com/home" rel="noreferrer" target="_blank">
              <Button
                sx={{
                  backgroundColor: "inherit",
                  color: "white",
                  borderRadius: "100px",
                  marginLeft: { lg: "5px", xs: "3px" },
                  "&:hover": {
                    transform: "translateY(-5px) ",
                  },
                }}
              >
                <TwitterIcon sx={{'&:hover':{color:"#6339f5"}}}/>
              </Button>
            </a>
            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
              <Button
                sx={{
                  backgroundColor: "inherit",
                  color: "white",
                  borderRadius: "100px",

                  "&:hover": {
                    transform: "translateY(-5px) ",
                  },
                }}
              >
                <FacebookIcon sx={{'&:hover':{color:"#6339f5"}}} />
              </Button>
            </a>
          </motion.div>
        </Stack>
        <Stack>
          <motion.img
            src={Logo1}
            alt="Logo"
            width="200px"
            height="40px"
            className="logo-1"
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          ></motion.img>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          marginBottom="10px"
          spacing={{ xs: 1, sm: 1, md: 2 }}
        >
          <Typography
            color="white"
            component={motion.div}
            sx={{
              fontSize: { lg: "25px", xs: "16px" },
              fontWeight: "bold",
              marginRight: "40px",
              marginTop: "10px",
              "&:hover": { borderBottom: "2px solid white" ,color:"#6339f5" },
            }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            Important links
          </Typography>

          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            style={{ textDecoration: "none" }}
          >
            <Typography
              fontFamily="monospace"
              component={motion.div}
              sx={{
                " &:hover":{color:"#6339f5"},
                color: "white",
                fontSize: { lg: "15px", xs: "9px" },
                fontWeight: "bold",
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
             
            >
              Home {<LaunchIcon fontSize="10px" />}
            </Typography>
          </Link>
          <Link
            to="/blogs"
            style={{ textDecoration: "none" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Typography
              fontFamily="monospace"
              component={motion.div}
              sx={{
                color: "white",
                fontSize: { lg: "15px", xs: "9px" },
                fontWeight: "bold",
                " &:hover":{color:"#6339f5"},
                
              }}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
            >
              Blogs {<LaunchIcon fontSize="10px" />}
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <motion.div
      initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.0,
              delay: 0.3,
            }}
        style={{
          display: "flex",
          background: "#100C08",
          color: "white",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          fontWeight: 900,
          fontFamily: "fantasy",
          fontSize: "17px",
          
        }}
       
      >
        All rights &copy; are reserved Made With 💖 and{" "}
        <img
          src={ReactLogo}
          alt="react"
          width="30px"
          style={{ marginLeft: "13px", marginRight: "10px" }}
        />{" "}
        <img
          src={MaterialUi}
          alt="materialui"
          width="30px"
          style={{ marginTop: "5px", marginRight: "10px", marginLeft: "10px" }}
        />{" "}
        <img
          src={RapidApi}
          alt="rapid"
          width="30px"
          style={{ marginRight: "13px", marginLeft: "13px" }}
        />
      </motion.div>
    </Box>
  );
};

export default Footer;
