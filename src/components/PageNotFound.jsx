import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          align="center"
          sx={{
            color: "#663399",
            fontWeight: "bold",
            fontSize: "100px",
            textShadow: "2px 2px 2px #6339f5",
            fontFamily: "monospace",
            "&:hover": { color: "#6339f5" },
            fontSize: {
              xs: "50px",
              sm: "70px",
              md: "100px",
            },
          }}
        >
          Page Not Found
        </Typography>
      </motion.div>
    </Box>
  );
};

export default PageNotFound;
