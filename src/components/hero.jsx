import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";
import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";
import { motion } from "framer-motion";
const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography
          component={motion.div}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          <Typography color="#6339f5" fontWeight="600" fontSize="26px" className="fitness-club">
            Fitness club
          </Typography>
          <Typography
            fontWeight="700"
            sx={{
              fontSize: { lg: "44px", xs: "40px" },
              color: theme.color,
            }}
            mb="23px"
            mt="30px"
            className="Moto"
          >
            Sweat , Smile <br /> and Repeat
          </Typography>
          <Typography
            fontSize="15px"
            lineHeight="35px"
            mb={4}
            sx={{ color: theme.color }}
          >
            Checkout the most effective Exercises
          </Typography>
          <Button
            href="#exercises"
            sx={{
              backgroundColor: "#6339f5",
              color: theme.color,
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            Explore Exercises
          </Button>
        </Typography>
        <Typography
        component={motion.div}
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 0.2,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          fontWeight="600"
          color="#6339f5"
          sx={{
            marginLeft:"10px",
            marginTop:"75px",
            display: { lg: "block", xs: "none" },
          }}
          fontSize="180px"
          className="Exercises"
        >
          Exercises
        </Typography>
        <motion.img src={HeroBannerImage} alt="Banner" className="hero-banner-img" 
        initial={{
            opacity: 0,
            x: 140,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }} />
      </Box>
    </>
  );
};

export default Hero;
