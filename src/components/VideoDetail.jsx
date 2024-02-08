import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';
import { fetchApi } from '../utils/fetchFromAPI';

function VideoDetail ()
{
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => 
  {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const { 
    snippet : 
      { title, channelId, channelTitle }, 
    statistics : 
      { viewCount, likeCount}} = videoDetail;

  return (
    <Box
      minHeight = "95vh"
    >
      <Stack
        direction = 
        {{
          xs: "column",
          md: "row"
        }}
      >
        <Box
          flex = {1}
        >
          <Box
            sx = 
            {{
              width: "100%",
              position: "sticky",
              left: "0",
              top: "96px"
            }}
          >
              <ReactPlayer
                controls
                className = "react-player"
                url = {`https://www.youtube.com/watch?v=${id}`}
              />
              <Typography
                color = "#fff"
                variant = "h5"
                fontWeight = "bold"
                p = {2}
              >
                  {title}
              </Typography>
              <Stack
                py = {1}
                px = {2}
                direction = "row"
                justifyContent = "space-between"
                sx =
                {{
                  color: "#fff",
                }}
              >
                <NavLink to = {`/channel/${channelId}`}>
                    <Typography
                      variant = 
                      {{
                        sm: "subtitle1",
                        md: "h6"
                      }}
                      color =  "#fff"
                    >
                        {channelTitle}
                        <CheckCircle 
                          sx = 
                          {{
                            fontSize : "12px",
                            color: "#8a8484",
                            ml: "5px"
                          }}
                        />
                    </Typography>
                </NavLink>
                <Stack
                  direction = "row"
                  gap = "20px"
                  alignItems = "center"
                >
                    <Typography
                      variant = "body1"
                      sx = 
                      {{
                        opacity: 0.8
                      }}
                    >
                      { parseInt(viewCount).toLocaleString() } views
                    </Typography>
                    <Typography
                      variant = "body1"
                      sx = 
                      {{
                        opacity: 0.8
                      }}
                    >
                      { parseInt(likeCount).toLocaleString() } likes
                    </Typography>
                </Stack>
              </Stack>
          </Box>
        </Box>
        <Box
        px = {2}
        py = 
        {{
          md: 1,
          xs: 5
        }}
        justifyContent = "center"
        alignItems = "center"
      >
        <Videos videos = {videos} direction = "column" />
      </Box>
      </Stack>
    </Box>
  )
};

export default VideoDetail;
