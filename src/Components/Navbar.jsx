import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import { logo } from '../Utils/Constants';

function Navbar() {
  return (
    <>
      <Stack
        sx={{ backgroundColor: '#000' }}
        direction="row" justifyContent="space-between" alignItems="center" p={2}>
          
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" height={45} />
        </Link>

        <SearchBar />
      </Stack>
    </>
  )
}

export default Navbar
