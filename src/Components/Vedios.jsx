import React from 'react';
import {Stack, Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function Vedios({Vedios}) {
  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {Vedios.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard getVedios= {item} />}
            {item.id.channelId && <ChannelCard channelDetail = {item} />}
          </Box>
        ))}
      </Stack>
    </>
  )
}

export default Vedios
