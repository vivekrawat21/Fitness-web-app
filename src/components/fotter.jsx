import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

function Fotter() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
    <Stack gap="40px" alignItems="center" px="40px" pt="24px">
    <img src={Logo} alt='Logo' width="200px" height="40px"/>
    <Typography varient="h5" pb="40px" mt="25px" >
      Made With ❤️ by ####
    </Typography>

    </Stack>
      
    </Box>
  )
}

export default Fotter;