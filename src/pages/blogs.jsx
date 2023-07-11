import React from "react";
import { Stack } from "@mui/material";
import Card from "../components/card";
import ScrollToTop from "../components/ScrollToTop";

const blogs = () => {
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: "20px" }}
      >
        <Card />
        <Stack
          justifyContent="center"
          alignItems="center"
          position="fixed"
          right={10}
          bottom={10}
          zIndex={9999} 
        >
          <ScrollToTop />
        </Stack>
      </Stack>
    </>
  );
};

export default blogs;
