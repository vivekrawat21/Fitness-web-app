import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '../components/hero';
import ExerciseSearch from '../components/exercisesearch'
import Exercises from '../components/exercises';

function home() {
  return (
    <>
<Box>
<Hero />
<ExerciseSearch />
<Exercises />


</Box>

    </>
  )
}

export default home