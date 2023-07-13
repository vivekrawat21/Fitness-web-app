import React from "react";

import Logo1 from "../assets/images/lo.png";
import ReactLogo from "../assets/icons/react-logo-1.png"
import RapidApi from "../assets/icons/rapidapi-icon.svg"
import { Box, Stack, Typography ,Button } from "@mui/material";

import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MaterialUi from "../assets/icons/material-ui-1.svg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#111827">
   <Stack direction="row"  justifyContent="space-between" alignItems={"center"} mx={{lg:"40px",xs:"20px"}}>
      <Stack  alignItems="center" direction="column" spacing={{  lg :2 ,xs: 1, sm: 2, md: 4 }} >
        <Typography  sx={{ fontWeight:"660", fontSize:{lg:"25px",xs:"16px"},'&:hover':{borderBottom:"2px solid white "}}} color="white">
          Social links
        </Typography>
        <div style={{display:"flex"}}>
      <a href="www.linkedin.com" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                color:"white",
                width: {lg:"10px",xs:"3px"},
                height: {lg:"10px",xs:"3px"},
                borderRadius: "100px",
                marginLeft: {lg:"5px",xs:"3px"},
                '&:hover': {
               
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <LinkedInIcon />
            </Button>
          </a>
          <a href="www.twitter.com" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                color:"white",
                width: {lg:"10px",xs:"3px"},
                height: {lg:"10px",xs:"3px"},
                borderRadius: "100px",
                marginLeft:{lg:"5px",xs:"3px"},
                '&:hover': {
                  
                  transform: 'translateY(-5px) ',
                },
              }}
            >
              <TwitterIcon />
            </Button>
          </a>
          <a href="www.facebook.com" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                color:"white",
                width: {lg:"10px",xs:"3px"},
                height: {lg:"10px",xs:"3px"},
                borderRadius: "100px",
              
                '&:hover': {
                
                  transform: 'translateY(-5px) ',
                },
              }}
            >
              <FacebookIcon />
            </Button>
          </a>
          </div>
      </Stack>
      <Stack>
        <img src={Logo1} alt="Logo" width="200px" height="40px" className="logo-1"/>
        
      </Stack>
      <Stack direction="column"   alignItems="center" marginBottom="10px" spacing={{ xs: 1, sm: 1, md: 2 }}>
      <Typography  color="white" sx={{ fontSize:{lg:"25px",xs:"16px"},fontWeight:"bold", marginRight:"40px" ,marginTop:"10px",'&:hover':{borderBottom:"2px solid white "}}}>
          Important links
        </Typography>
      
      <Link to="/"  onClick={() => {
        
              window.scrollTo(0, 0);
            }} style={{ textDecoration: 'none' }} 
            >
           
        <Typography sx={{  color :"white" ,fontSize:{lg:"17px",xs:"11px"},fontWeight:"520", '&:hover': {
                  transform: 'translateY(-5px)'
                }}} >Home</Typography>
          </Link>
          <Link to="/blogs" style={{textDecoration:"none"}} onClick={() => {
        
              window.scrollTo(0, 0);
            }}>
<Typography  sx={{  color :"white" , fontSize:{lg:"17px",xs:"11px"}, fontWeight:"520",'&:hover': {
                  transform: 'translateY(-5px)',
                }}}>Blogs</Typography>
          </Link>
      </Stack>
      </Stack>
    <div style={{display:"flex" , background:"#100C08", color:"white" , width:"100vw" ,justifyContent:"center", alignItems:"center",height:"50px" , fontWeight:900 ,fontFamily:"fantasy", fontSize:"17px"}}>
       All rights &copy; are reserved  Made With 💖 and <img src={ ReactLogo} alt="react" width="30px" style={{marginLeft:"13px", marginRight:"10px"}}/> <img src={ MaterialUi} alt="materialui" width="30px" style={{marginTop:"5px" ,marginRight:"10px",marginLeft:"10px"}}  /> <img src={ RapidApi} alt="rapid" width="30px" style={{marginRight:"13px", marginLeft:"13px"}}/>
          
          </div>
     
    </Box>
  );
};

export default Footer;
