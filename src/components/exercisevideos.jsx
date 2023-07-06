import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";
import { Typography, Box, Stack } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  const { theme } = useContext(ThemeContext);
  // console.log(exerciseVideos);
  if (!exerciseVideos.length) return "loading....";
  return (
    <>
      <Box
        sx={{
          marginTop: { lg: "200px", xs: "20px" },
        }}
        padding="20px"
      >
        <Typography variant="h4" mb="40px" fontWeight="600" color={theme.color}>
          Watch{" "}
          <span
            style={{
              color: "#6339f5",
              textTransform: "capitalize",
            }}
          >
            {name}{" "}
          </span>
          exercise Videos
        </Typography>
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="cneter"
          sx={{
            flexDirection: { lg: "row" },
            gap: { lg: "110px", xs: "0" },
          }}
        >
          {exerciseVideos?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https:www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />

              <Box>
                <Typography variant="h7" fontWeight="500" color={theme.color}>
                  {item.video.title}
                </Typography>
                <br />
                <Typography variant="h6" fontWeight="800" color={theme.color}>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default ExerciseVideos;
