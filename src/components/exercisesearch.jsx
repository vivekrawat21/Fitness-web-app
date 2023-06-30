import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "../components/horozontalscrollbar";
function Exercisesearch({ setExercises, bodyPart, setBodyPart }) {
  
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter((exercise) => {
        const exerciseTarget = exercise.target
          ? exercise.target.toLowerCase()
          : "";
        const exerciseBodyPart = exercise.bodypart
          ? exercise.bodypart.toLowerCase()
          : "";
        const exerciseName = exercise.name ? exercise.name.toLowerCase() : "";

        return (
          exerciseName.includes(search) ||
          exerciseTarget.includes(search) ||
          exerciseBodyPart.includes(search)
        );
      });
      setSearch("");
      setExercises(searchedExercises);
      console.log(searchedExercises);
    }
  };

  return (
    <>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: "44px", xs: "30px" },
          }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1000px", xs: "350px" },
              backgroundColor: "#ffff",
              borderRadius: "40px",
            }}
            height="76px"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "180px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            p: "20px",
          }}
        >
          <HorizontalScrollBar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      </Stack>
    </>
  );
}

export default Exercisesearch;
