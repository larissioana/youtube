import React from 'react'
import { Stack } from '@mui/material'; 
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

function Videos({ videos = [], direction })
{
 
  return (
    <Stack
        direction =  {direction || "row"}
        flexWrap = "wrap"
        justifyContent = "center"
        gap = {1}
    >
      {
        videos.map((video, index) =>
        {
            return <div key = {index}>
                {
                    video.id.channelId && 
                    <ChannelCard channelDetail = {video}/>
                } 
                {
                    video.id.videoId &&
                    <VideoCard video = {video}/>
                }
            </div>
        })
      }
    </Stack>
  )
};

export default Videos;
