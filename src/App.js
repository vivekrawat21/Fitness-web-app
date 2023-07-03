import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ExerciseDetails from "./pages/exercisedetails";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercisedetails/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
};

export default App;
