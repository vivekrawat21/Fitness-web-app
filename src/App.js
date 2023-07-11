import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ExerciseDetails from "./pages/exercisedetails";
import Blogs from "./pages/blogs";
import Footer from "./components/footer";
import { useContext } from "react";
import { ThemeContext } from "./Context/Theme";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div style={{ backgroundColor: theme.background }}>
        <Navbar />
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercisedetails/:id" element={<ExerciseDetails />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default App;
