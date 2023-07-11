import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: showButton ? 1 : 0,
        y: showButton ? 0 : 100,
      }}
      transition={{ duration: 0.3 }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        border={"2px solid #663399"}
        position="fixed"
        bottom={16}
        right={16}
        visibility={showButton ? "visible" : "hidden"}
        zIndex={9999}
      >
        <IconButton
          color="primary"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          size="large"
        >
          <ArrowUpwardIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default ScrollToTop;
