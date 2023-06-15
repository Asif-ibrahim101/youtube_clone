import React, {useState, useEffect} from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import {Link} from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../Utils/Constants';

function VideoCard({getVedios: {id: {videoId}, snippet}}) {
  console.log(videoId, snippet);
  return (
   <>
      <Card sx={{width: {md: '320px', xs: '100%'}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{height: 180, width: 358}}
          />
        </Link>

        <CardContent
        sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
          <Link  to={videoId ? `video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' color='#fff' fontWeight='bold'>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </Typography>
          </Link>

          <Link  to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
              <Typography variant='subtitle2' color='gray' fontWeight='bold'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
              </Typography>
          </Link>
        </CardContent>
      </Card>
   </>
  )
}

export default VideoCard