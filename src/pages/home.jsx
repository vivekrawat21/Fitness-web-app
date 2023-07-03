import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Hero from "../components/hero";
import ExerciseSearch from "../components/exercisesearch";
import Exercises from "../components/exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  console.log(Array.isArray(exercises));
  return (
    <>
      <Box>
        <Hero />
        <ExerciseSearch
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </Box>
    </>
  );
};

export default Home;
