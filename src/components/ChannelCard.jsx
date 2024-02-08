import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function ChannelCard({ channelDetail, pointerEvents })
{

function formatNumber(number)
{
    if (number < 1000000)
    {
        return number.toString();
    } else if (number < 1000000000)
    {
        const formatted = (number / 1000000).toFixed(1);
        return formatted.endsWith('.0') ? formatted.slice(0, -2) + ' mil' : formatted + ' mil.';
    } else
    {
        const formatted = (number / 1000000000).toFixed(1);
        return formatted.endsWith('.0') ? formatted.slice(0, -2) + ' bil' : formatted + ' bil.';
    }
};

const subscriberCount = channelDetail?.statistics?.subscriberCount || 0;
const formattedSubscriberCount = formatNumber(subscriberCount);

  return (
    <Box
        sx = 
        {{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 
            {
                xs: "356px",
                md: "370px"
            },
            
            margin: "auto"
        }}
    >
        <NavLink to = {`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx =
                {{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "#fff"
                }}
            >
                <CardMedia
                    sx =
                    {{
                        borderRadius: "50%",
                        height: "150px",
                        width: "150px",
                        mb: 2,
                        borderTop: "1px solid #232323",
                        borderBottom: "1px solid #232323"
                    }}
                    alt = {channelDetail?.snippet?.title}
                    image = {channelDetail?.snippet?.thumbnails?.high?.url}
                />
                <Typography variant = "h6">
                    {
                        channelDetail?.snippet?.title
                    }
                    <CheckCircle
                    sx = 
                    {{
                        fontSize: 14,
                        color: "gray",
                        ml: "5px"
                    }}
                />
                </Typography>
                {
                    channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {
                                formattedSubscriberCount
                            } subscribers
                        </Typography>
                    )
                }
            </CardContent>
        </NavLink>
    </Box>
  )
};

export default ChannelCard;
