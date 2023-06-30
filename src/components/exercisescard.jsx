import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack , Typography} from "@mui/material"
function ExercisesCard({exercise}) {
  return (
    
    <>
<Link  className="exercise-card" to={`exercise/e/${exercise.id}`} >
<img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
<Stack direction="row">
<Button sx={{
    ml:'21px',
    color: '#fff',backgroundColor: '#ffa9a9',fontSize:'14px',borderRadius:'20px' ,textTransform:'capitalize',border: '1px solid black'
}}>
{exercise.bodyPart}
    
</Button>
<Button sx={{
    ml:'21px',
    color: '#fff',backgroundColor: '#fcc757',fontSize:'14px',borderRadius:'20px' ,textTransform:'capitalize',border: '1px solid black'
}}>
{exercise.target}
    
</Button>


</Stack>
<Typography ml='21px' color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="21px">
    {exercise.name}
</Typography>
</Link>

    
    </>
  )
}

export default ExercisesCard