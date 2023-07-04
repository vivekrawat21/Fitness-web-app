import React from 'react'
import { useState,useContext } from 'react';
import Drrawer from '@mui/material/Drawer';
import  {  List,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from "../Context/Theme"; 

function Drawer({Pages}) {
  const { theme } = useContext(ThemeContext);
  const [ openDrawer ,SetOpenDrawer] = useState(false)
   
  return (
    
    <>
    <React.Fragment>
    <Drrawer open={openDrawer} onClose={()=>SetOpenDrawer(false)} variant='temporary'  sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%',fontWeight:'800' },
            }}>   
      <List >
      {
        Pages.map ((page,index)=>(
           
            <ListItemButton key={index} onClick={()=>(SetOpenDrawer(!openDrawer))}>
            <ListItemIcon>
        <ListItemText>{page}</ListItemText>
        </ListItemIcon>
        </ListItemButton>
            ))
      }
       
     </List>
    </Drrawer>

    <MenuIcon onClick={()=>SetOpenDrawer(!openDrawer)} sx={{
        visibility: { lg: 'hidden',xs: 'visible'},
        cursor: "pointer",
        marginLeft:"100px",
        color:theme.background

        
    }}  />

   
    </React.Fragment>
    </>
  )
}

export default Drawer