import React from 'react'
import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import Detail from '../components/exercisedetail.jsx';
import ExerciseVideos from '../components/exercisevideos.jsx';
import SimilarExercises from '../components/similarexercises.jsx';

function ExerciseDetails() {
  return (
  <>
  <Box>
   <Detail />
   <ExerciseVideos  />
   <SimilarExercises />


  </Box>
  

  </>
  )
}

export default ExerciseDetails;