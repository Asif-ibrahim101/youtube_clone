import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import FetchFromAPI from "../Utils/FetchFormApi";
import Videos from "./Vedios";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos Vedios={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
// import React, {useState, useEffect} from 'react';
// import { Box, Typography } from '@mui/material';
// import Vedios from './Vedios';
// import FetchFormApi from '../Utils/FetchFormApi';
// import {useParams} from 'react-router-dom'

// function SearchFeed() {
//   const {searchTerm} = useParams();
//   const [videos, SetVideos] = useState([]);

//   useEffect(()=> {
//     FetchFormApi(`search?part=snippet&q=${searchTerm}`).then((data)=> {SetVideos(data.items)})
//   }, [searchTerm])

//   return (
//     <>
//         <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
//           <Typography variant='h5' fontWeight='bold' mb={2} sx={{color: 'white'}}>
//             search results for : 
//             <span style={{color: '#F31503'}}>{searchTerm}</span> </Typography>
//           <Vedios Vedios = {videos} />
//         </Box>
//     </>
//   )
// }

// export default SearchFeed
