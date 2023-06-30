import React from "react";
import {  Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png"
function Hero() {
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
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
          Fitness club
        </Typography>
        <Typography
          fontWeight="700"
          sx={{
            fontSize: { lg: "44px", xs: "40px" },
          }}
          mb="23px" mt="30px"
        >
          Sweat , Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="15px" lineHeight="35px" mb={4} color={"gray"}>
          Checkout the most effective Exercises
        </Typography>
        <Button
          variant="contained"
          href="#exercises"
          sx={{
         backgroundColor: '#ff2625',
         padding:'10px'
          }}
          
        >
          Explore Exercises
        </Button>
        <Typography
        fontWeight='600'
        color='#ff2625'
        sx={{
            opacity: 0.12,
            display: {lg:'block',xs : 'none'}
        }}
        fontSize='200px'
        >
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="Banner" className="hero-banner-img"/>
      </Box>
    </>
  );
}

export default Hero;
