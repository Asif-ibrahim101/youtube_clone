import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar  from  './Components/Navbar';
import Feed  from  './Components/Feed';
import SearchFeed  from  './Components/SearchFeed';
import VideoDetail  from  './Components/VideoDetail';
import ChannelDetail  from  './Components/ChannelDetail';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path='/video/:id' element={<VideoDetail/>} />
            <Route path='/channel/:id' element={<ChannelDetail/>} />
            <Route path='/search/:searchTerm' element={<SearchFeed/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
