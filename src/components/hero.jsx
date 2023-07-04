import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import { useContext } from "react";
import { ThemeContext } from "../Context/Theme"; 
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
        <Typography color="#6339f5" fontWeight="600" fontSize="26px">
          Fitness club
        </Typography>
        <Typography
          fontWeight="700"
          sx={{
            fontSize: { lg: "44px", xs: "40px" },
            color: theme.color
          }}
          
          mb="23px"
          mt="30px"
        >
          Sweat , Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="15px" lineHeight="35px" mb={4} sx={{color:theme.color}}>
          Checkout the most effective Exercises
        </Typography>
        <Button
          href="#exercises"
          sx={{
            backgroundColor: "#6339f5",
            color:theme.color,
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight="600"
          color="#6339f5"
          sx={{
            opacity: 0.12,
            display: { lg: "block", xs: "none" },
          }}
          fontSize="200px"
        >
          Exercises
        </Typography>
        <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
      </Box>
    </>
  );
};

export default Hero;
