import React from 'react';
import { Stack } from '@mui/material';
// import { categories } from '../Utils/Constants';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


const categories = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'JS Mastery', icon: <CodeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <CodeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  { name: 'Gym', icon: <FitnessCenterIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
];

function SideBar({categorySellected, SetCategorySellected}) {
  return (
    <>
      <Stack direction='row'
        sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>

        {
          categories.map((Category) => (
            <button
              key={Category.name}
              onClick={() => SetCategorySellected(Category.name)}
              className='category-btn'
              style={{ background: Category.name === categorySellected && '#FC1503', color: 'white' }}
            >

              <span style={{ color: Category.name === categorySellected ? 'white' : 'red', marginRight: '15px' }}>{Category.icon}</span>

              <span style={{opacity: Category.name === categorySellected ? '1' : '0.8'}}>{Category.name}</span>
            </button>
          ))
        }

      </Stack>
    </>
  )
}

export default SideBar
