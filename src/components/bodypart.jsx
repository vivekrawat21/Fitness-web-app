import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/treadmill.png";
import { motion } from "framer-motion";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "8px Solid #6339f5" : "",
          backgroundColor: "#fff",
          borderBottomLeftRadius: "20px",
          width: "270px",
          height: "240px",
          cursor: "pointer",
          gap: "47px",
        }}
        onClick={() => {
          setBodyPart(item);
          // console.log(bodyPart)
          window.scrollTo({ top: 1750, left: 100, behavior: "smooth" });
        }}
      >
        <motion.img
          src={Icon}
          alt="dumble"
          className="body-part-icon"
          style={{
            width: "60px",
            height: "60px",
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
        ></motion.img>
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="#663399"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Stack>
    </>
  );
};

export default BodyPart;
