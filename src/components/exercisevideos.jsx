import React from 'react'
import { Typography,Box , Stack } from '@mui/material';


function ExerciseVideos({exerciseVideos , name}) {

  console.log(exerciseVideos);
  if(!exerciseVideos.length) return 'loading....';
  return (
   <>
<Box sx={{
  marginTop:{lg:'200px',xs:'20px'} 
}} padding="20px">

<Typography variant= 'h4' mb='40px' fontWeight="600">
Watch <span style={{
  color:'#ff2625',textTransform:"capitalize"
}}>{name}{" "}</span> 
 exercise Videos
</Typography>
<Stack justifyContent="flex-start" flexWrap="wrap" alignItems="cneter"
sx={{
flexDirection: {lg:'row'},
gap:{lg:'110px' ,xs:"0"} 
}}
>
  {exerciseVideos?.slice(0,3).map((item,index) =>(

    <a
      key={index}
      className='exercise-video'
      href={`https:www.youtube.com/watch?v=${item.video.videoId}`}
      target='_blank'
      rel='noreferrer'
    >
    <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
    
    
<Box>
  <Typography variant='h7' fontWeight="500" color="#000">
    {item.video.title}
   
  </Typography>
  <br/>
  <Typography variant='h6' fontWeight="800" color="#000">
    {item.video.channelName}
  </Typography>
</Box>
    </a>
  ))}


</Stack>

</Box>
   </>
  )
}

export default ExerciseVideos;