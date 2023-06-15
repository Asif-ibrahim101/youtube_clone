import React, {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Vedios from './Vedios';
import FetchFormApi from '../Utils/FetchFormApi';

function Feed() {

  const [categorySellected, SetCategorySellected] = useState('New');
  const [videos, SetVideos] = useState([]);

  useEffect(()=> {
    FetchFormApi(`search?part=snippet&q=${categorySellected}&`).then((data)=> {SetVideos(data.items)})
  }, [categorySellected])

  return (
    <>
      <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
        <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sm: 0, md: 2}}}>
          <SideBar categorySellected = {categorySellected} SetCategorySellected = {SetCategorySellected} />

          <Typography className='copyright' sx={{color: '#fff', py: '10px', mt: {sx: 0, md: 2}, borderTop: '2px solid #3d3d3d'}} variant='body2'>
            Copyright 2022 Asif Ibrahim
          </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h5' fontWeight='bold' mb={2} sx={{color: 'white'}}>{categorySellected} <span style={{color: '#F31503'}}>Vedios</span> </Typography>

          <Vedios Vedios = {videos} />
        </Box>
      </Stack>
    </>
  )
}

export default Feed
