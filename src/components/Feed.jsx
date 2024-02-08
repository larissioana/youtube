import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchApi } from '../utils/fetchFromAPI';

function Feed()
{
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() =>
  {
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {setVideos(data.items)})
  }, [selectedCategory]);

  return (
    <Stack
      sx = {{
        flexDirection:
        {
          sx: "column",
          md: "row"
        },
      }}
    >
      <Box
        sx = {{
          height: 
          {
            sx: "auto",
            md: "92vh"
          },
          borderRight: "1px solid #503e3e",
          px: 
          {
            sm: 0,
            md: 2
          },
        }}
      >
        <Sidebar
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        /> 
        <Typography
          className = "copywright"
          variant = "body2"
          sx =
           {{
              mt: 1.5,
              color: "#fff"
           }}
        >
          @copyright 2024 LO   
        </Typography>
      </Box>
      <Box
        p = {2}
        sx =
        {{
          overflowY: "auto",
          height: "95vh",
          flex: 2,
        }}
      >
        <Typography
          variant = "h5"
          fontWeight = "bold"
          mb = {7}
          sx =
          {{
            color: "white"
          }}
        >
          {selectedCategory}
        </Typography>
        <Videos
          videos = {videos}
        />
      </Box>
    </Stack>
  )
};

export default Feed;
