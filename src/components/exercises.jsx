import React, { useState, useEffect, useContext } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExercisesCard from "./exercisescard";
import { ThemeContext } from "../Context/Theme";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ExercisePerPage = 9;
  const IndexOfLastExercise = currentPage * ExercisePerPage;
  const IndexOfFirstExercise = IndexOfLastExercise - ExercisePerPage;
  const CurrentExercises = exercises.slice(
    IndexOfFirstExercise,
    IndexOfLastExercise
  );
  const { theme } = useContext(ThemeContext);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "" || bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
        setExercises(exercisesData);
      }
    };
    fetchExercisesData();
  }, [bodyPart]);

  // console.log(exercises);
  return (
    <>
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
        <Typography variant="h3" mb="46px" fontWeight="600" color={theme.color}sx={{'&:hover': {color: "#6339f5"}}}>
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{
            gap: { lg: "110px", xs: "50px" },
          }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {CurrentExercises.map((exercise, index) => {
            return <ExercisesCard key={index} exercise={exercise} />;
          })}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#6339f5", // Set the dynamic background color for the selected item
                  color: `white`,
                },
              }}
              shape="rounded"
              count={Math.round(exercises.length / ExercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Exercises;
