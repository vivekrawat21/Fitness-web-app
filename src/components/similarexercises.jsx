import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./horozontalscrollbar";
import Loader from "./loader";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <>
      <Box
        sx={{
          mt: { lg: "100px", xs: "0px" },
        }}
      >
        <Typography variant="h4" mb="40px" fontWeight="600">
          Exercises that target the{" "}
          <span
            style={{
              color: "#ff2625",
              textTransform: "capitalize",
            }}
          >
            same{" "}
          </span>
          muscle group
        </Typography>

        <Stack
          direction="row"
          sx={{
            p: "2px",
            position: "relative",
          }}
        >
          {targetMuscleExercises.length ? (
            <HorizontalScrollBar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
        <div
          style={{
            marginTop: "70px",
          }}
        >
          <hr />
        </div>

        <Typography variant="h4" mb="40px" mt="70px" fontWeight="600">
          Exercises that uses the{" "}
          <span
            style={{
              color: "#ff2625",
              textTransform: "capitalize",
            }}
          >
            same{" "}
          </span>
          equipment
        </Typography>

        <Stack
          direction="row"
          sx={{
            p: "2px",
            position: "relative",
          }}
        >
          {equipmentExercises.length ? (
            <HorizontalScrollBar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default SimilarExercises;
