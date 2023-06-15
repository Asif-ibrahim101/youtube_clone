import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Vedios from './Vedios';
import ChannelCard from './ChannelCard';
import { Box } from '@mui/material';
import FetchFormApi from '../Utils/FetchFormApi';


function ChannelDetail() {
  const { id } = useParams();

  const [ChannelDetail, setChannelDetail] = useState(null);
  const [VediosDetail, setVedios] = useState([]);

  useEffect(() => {
    FetchFormApi(`channels?part=snippet&id=${id}`)
      .then((data) => {setChannelDetail(data?.items[0])})

    FetchFormApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {setVedios(data?.items)})
  }, [id])

  return (
    <>
        <Box minHeight='95vh'>
          <Box 
          style={
            {background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,241,1) 35%, rgba(0,212,255,1) 100%)',
            zIndex: 10, height: '300px'}}>

          </Box>
              <ChannelCard channelDetail={ChannelDetail} marginTop= '-110px'/>

          <Box display='flex' p='5'>
            <Box sx={{mr: {sm: '150px'}}}/>
              <Vedios Vedios={VediosDetail}/>
          </Box>
        </Box>
    </>
  )
}

export default ChannelDetail