import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: {md: '320px', xs: '356px'}, height: '326px', margin: 'auto', marginTop}}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#fff', textAlign: 'center' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />

          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
          </Typography>

          {
            channelDetail?.statistics?.subscriberCount && (
              <Typography variant='body2' sx={{ color: 'gray' }}>
                {parseInt(channelDetail.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
