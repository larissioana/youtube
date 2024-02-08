import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchApi } from '../utils/fetchFromAPI';

function ChannelDetail()
{
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
    
  const { id } = useParams();
  
  useEffect(() =>
  {
    fetchApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
  }, [id]);

  useEffect(() =>
  {
    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id]);

  return (
    <Box
      minHeight = "95vh"
    >
      <Box
        style={{ pointerEvents: 'auto' }}
      >
        <div style = {{marginTop: "5rem"}}></div>
        <ChannelCard channelDetail = {channelDetail}/>
      </Box>
      <Box
        display = "flex"
        p = "2"
      >
          <Box
            sx = 
            {{
              mr:
              {
                sm: "100px"
              }
            }}
          />
              <Videos videos = {videos}/>
      </Box>
    </Box>
  )
};

export default ChannelDetail;
