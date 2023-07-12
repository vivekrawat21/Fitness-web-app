import React from "react";
import { Box, Stack } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import ReactLogo from "../assets/icons/react-logo-1.png"
import RapidApi from "../assets/icons/rapidapi-icon.svg"
import MaterialUi from "../assets/icons/material-ui-1.svg"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#111827">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" pb="60px">

        <img src={Logo} alt="Logo" width="200px" height="40px" />
        </Stack>
    <div style={{display:"flex" , background:"#100C08", color:"white" , width:"100vw" ,justifyContent:"center", alignItems:"center",height:"50px" , fontWeight:900 ,fontFamily:"fantasy", fontSize:"17px"}}>
       All rights &copy; are reserved  Made With 💖 and <img src={ ReactLogo} alt="react" width="30px" style={{marginLeft:"13px", marginRight:"10px"}}/> <img src={ MaterialUi} alt="materialui" width="30px" style={{marginTop:"5px" ,marginRight:"10px",marginLeft:"10px"}}  /> <img src={ RapidApi} alt="rapid" width="30px" style={{marginRight:"13px", marginLeft:"13px"}}/>
          
          </div>
     
    </Box>
  );
};

export default Footer;
