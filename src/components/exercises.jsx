import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExercisesCard from "./exercisescard";
function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ExercisePerPage = 9;
  const IndexOfLastExercise = currentPage * ExercisePerPage;
  const IndexOfFirstExercise = IndexOfLastExercise - ExercisePerPage;
  const CurrentExercises = exercises.slice(
    IndexOfFirstExercise,
    IndexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  // console.log(exercises);
  return (
    <>
      <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
        <Typography variant="h3" mb="46px" fontWeight="600">
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
              color="secondary"
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
}

export default Exercises;
