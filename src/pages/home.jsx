
import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '../components/hero';
import ExerciseSearch from '../components/exercisesearch'
import Exercises from '../components/exercises';
function Home() {
  const [bodyPart, setBodyPart] = useState('')
  const [exercises, setExercises] = useState([]);
  return (
    <>
<Box>
<Hero />
<ExerciseSearch setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
<Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />


</Box>

    </>
  )
}

export default Home