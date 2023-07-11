import React from 'react'
import { Stack,Box } from '@mui/material';
import Card from '../components/card';

 const blogs = () => {
  return (
    <>
    
        <Stack direction={'column'} justifyContent={"center"} alignItems={"center"} sx={{marginTop:"20px"}} >
             
          <Card />


        </Stack>
    </>


  )
}

export default blogs;