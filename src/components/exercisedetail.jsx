import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const ExerciseDetails = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];
  console.log(gifUrl);
  return (
    <>
      <Stack
        gap="60px"
        sx={{
          flexDirection: { lg: "row" },
          padding: "20px",
          alignItems: "center",
        }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack
          sx={{
            gap: { lg: "35px", xs: "20px" },
          }}
        >
          <Typography variant="h3" textTransform="capitalize">
            {name}
          </Typography>
          <Typography variant="h6" textTransform="capitalize">
            Exercises Keep you strong . {name} is one of the best exercises to
            target on your {target} .It willhelp you improve your mood and gain
            energy.
          </Typography>
          {extraDetail.map((item) => {
            return (
              <Stack
                key={item.name}
                direction="row"
                gap="24px"
                alignItems="center"
              >
                <Button
                  sx={{
                    background: "yellow",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={bodyPart}
                    style={{ width: "40px", height: "40px" }}
                  />
                </Button>
                <Typography
                  variant="h6"
                  fontWeight="550"
                  textTransform="capitalize"
                >
                  {item.name}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default ExerciseDetails;
