import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/exercisedetail.jsx";
import ExerciseVideos from "../components/exercisevideos.jsx";
import SimilarExercises from "../components/similarexercises.jsx";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisesdb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/channel/about";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos />
        <SimilarExercises />
      </Box>
    </>
  );
};

export default ExerciseDetails;
