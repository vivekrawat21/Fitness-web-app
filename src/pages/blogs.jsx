import React from "react";
import { Stack } from "@mui/material";
import Card from "../components/card";

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
      </Stack>
    </>
  );
};

export default blogs;
