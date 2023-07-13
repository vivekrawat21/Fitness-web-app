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
   <Stack direction="row"  justifyContent="space-between">
      <Stack  mx="40px"  mt =" 14px" direction="column"spacing={{  lg :2 ,xs: 1, sm: 2, md: 4 }} >
        <Typography  variant="h4" color="white">
          Social links
        </Typography>
      <a href="#" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                // color: theme.color,
                color:"white",
                width: "5px",
                // height: "10px",
                borderRadius: "100px",
                marginLeft: "5px",
                '&:hover': {
                  // backgroundColor: '',
                  // color: '#ffffff',
                  transform: 'translateY(-5px) scale(1.1)',
                },
              }}
            >
              <LinkedInIcon />
            </Button>
          </a>
          <a href="#" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                color:"white",
                // color: theme.color,
                width: "5px",
                borderRadius: "100px",
                marginLeft: "5px",
                '&:hover': {
                  // backgroundColor: '',
                  // color: '#ffffff',
                  transform: 'translateY(-5px) scale(1.1)',
                },
              }}
            >
              <TwitterIcon />
            </Button>
          </a>
          <a href="#" target="#">
            <Button
              sx={{
                backgroundColor: "inherit",
                // color: theme.color,
                
                color:"white",
                width: "10px",
                height: "10px",
                borderRadius: "100px",
                marginLeft: "5px",
                '&:hover': {
                  // backgroundColor: '',
                  // color: '#ffffff',
                  transform: 'translateY(-5px) scale(1.1)',
                },
              }}
            >
              <FacebookIcon />
            </Button>
          </a>
      </Stack>
      <Stack  mt =" 14px" gap="40px" alignItems="center" px="40px" pt="10px">
        <img src={Logo1} alt="Logo" width="200px" height="40px" />
        
      </Stack>
      <Stack direction="column"  mt =" 14px" spacing={{ xs: 1, sm: 2, md: 4 }}>
      <Typography variant="h4"  color="white">
          Important links
        </Typography>
      <Link to="/"  onClick={() => {
        
              window.scrollTo(0, 0);
            }} style={{ textDecoration: 'none' , }} 
            >
           
        <Typography variant="body1" sx={{  color :"white"}}>Home</Typography>
          </Link>
          <Link to="/blogs" onClick={() => {
        
              window.scrollTo(0, 0);
            }}style={{ fontSize: 'h6.fontSize' , textDecoration: 'none'}}>
<Typography variant="body1" sx={{  color :"white" ,  '&:hover': {
                  // backgroundColor: '',
                  // color: '#ffffff',
                  transform: 'translateY(-5px) scale(1.1)',
                },}}>Blogs</Typography>
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
