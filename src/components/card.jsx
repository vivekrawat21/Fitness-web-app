import React from "react";
import { Box, Stack, Button } from "@mui/material";
import jsonData from "../DB/BlogsDb.json";
import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {jsonData.map((data, index) => (
        <Box key={index} width={"60%"}>
          <Stack
            boxShadow={5}
            marginBottom={"90px"}
            border={"2px solid white"}
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
            <img
              src={data.blogImage}
              style={{ margin: "10px" }}
              alt="blog-img"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "30px",
                color: theme.color,
              }}
            >
              <h1
                style={{ borderBottom: "2px solid purple", margin: "12px 0" }}
              >
                {data.blogHeading}
              </h1>
              <p style={{ margin: "10px" }}>{data.blogDescription}</p>
            </div>
            <h3 style={{ margin: "10px 10px", color: theme.color }}>
              Author:{" "}
              <span style={{ color: "red", fontFamily: "monospace" }}>
                {data.authorName}
              </span>
            </h3>
            <a href={data.blogLink} target="#" style={{ margin: "5px 10px" }}>
              <Button variant="contained" sx={{ marginBottom: "25px" }}>
                Read Full Blog <LaunchIcon />{" "}
              </Button>
            </a>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default Card;
