import React from 'react'
import { NavLink } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { 
    demoVideoUrl,
    demoChannelTitle, 
    demoChannelUrl 
} from '../utils/constants';

function VideoCard({ 
    video: 
    {
        id: 
         {videoId},
        snippet
    }})
{

  return (
    <Card
        sx = 
        {{
            width:
            {
                md: "370px",
                xs: "100%"
            },
            boxShadow: "none",
            borderRadius: 0,
        }}
    >
        <NavLink to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
            alt = {snippet?.title}
            sx = 
            {{
                width: "100%",
                height: "20vh",
                borderTop: "1px solid #2e2c2c",
            }}
            image = {snippet?.thumbnails?.high?.url}
        />
        </NavLink>
        <CardContent
            sx = 
            {{
                backgroundColor: "#000000",
                height: "106px",
                width: "370px",
                paddingRight: '50px'
            }}
        >
            <NavLink 
                to = {videoId ? `/video/${videoId}` : demoVideoUrl}
            >
                <Typography
                    variant = "subtitle1"
                    fontWeight = "bold"
                    color = "#fff"
                >
                    {
                        snippet?.title.slice(0, 60) ||
                        demoChannelTitle.slice(0, 60)
                    }
                </Typography>
            </NavLink>
            <NavLink 
                to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
            >
                <Typography
                    variant = "subtitle2"
                    fontWeight = "bold"
                    color = "#827e7e"
                >
                    {
                        snippet?.channelTitle.slice(0, 60) ||
                        demoChannelTitle.slice(0, 60)
                    }
                <CheckCircle
                    sx = 
                    {{
                        fontSize: 12,
                        color: "gray",
                        ml: "5px"
                    }}
                />
                </Typography>
            </NavLink>
        </CardContent>
    </Card>
  )
};

export default VideoCard;
