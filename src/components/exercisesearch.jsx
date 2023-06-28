import React from 'react'
import { useState ,useEffect } from 'react';
import { Box , Button , Stack , TextField ,Typography } from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData'
function Exercisesearch() {
   
   
    const [search, setSearch]= useState('');
    const [exercises, setExercises] = useState([]);

const handleSearch=async () =>{
    if (search){
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

    //   const searchedExercises = exerciseData.filter(
    //     (exercise)=>exercise.name.toLowerCase().includes(search)
    //     ||exercise.target.toLowerCase().includes(search)
    //     ||exercise.equipment.toLowerCase().includes(search)
    //     ||exercise.bodypart.toLowerCase().includes(search)

    //   );

       setSearch('');
    //    setExercises(searchedExercises);
    //    console.log(exercises)
    console.log(exerciseData)
    }
}

  return (
   <>
   <Stack alignItems="center" mt="37px"
   justifyContent="center" p="20px"
   >
   <Typography fontWeight={700}  sx={{
    fontSize:{lg :'44px', xs : '30px'}
   }} mb='50px' textAlign="center">
   Awesome Exercises  You <br/>Should Know
   </Typography>
<Box position="relative" mb="72px">
<TextField 
sx={{
    input : {fontWeight: '700', border:'none', borderRadius:'4px'}
    , width:{lg:'1000px', xs:'350px'},
    backgroundColor: '#ffff',
    borderRadius: '40px'
}}
    height="76px"
   value={search}
    onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
    placeholder='Search Exercises'
    type='text'
/>
<Button className='search-btn'
sx={{
    bgcolor: "#ff2625",
    color: '#fff',
    textTransform:"none",
    width: {lg: '175px', xs: '180px'},
    fontSize:{lg: '20px', xs: '14px'},
    height: '56px',
    position:'absolute',
    right: '0'
}}
onClick={handleSearch}
>
Search

</Button>

</Box>
   </Stack>
   </>
  )
}

export default Exercisesearch