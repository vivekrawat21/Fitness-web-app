import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const bodypart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "8px Solid #ff2625" : "",
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
        <img
          src={Icon}
          alt="dumble"
          className="body-part-icon"
          style={{
            width: "40px",
            height: "40px",
          }}
        ></img>
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="#3A1212"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Stack>
    </>
  );
}

export default bodypart