import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { fetchApi } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

function SearchFeed()
{
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() =>
  {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
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
            <div style = 
            {{
                color: "#bbb6b6"
            }}>Search results for: 
                <span>  {searchTerm}</span>
            </div>
        </Typography>
        <Videos
          videos = {videos}
        />
    </Box>
  )
};

export default SearchFeed;
