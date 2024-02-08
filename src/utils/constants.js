import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Disney from '../assets/mickey.png';
import Youtube from '../assets/youtube.png';

export const logo = Youtube;

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Beyonce', icon: <MusicNoteIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Neuroscience', icon: <PsychologyIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Disney', icon: <img src = {Disney} width = "20" alt = "Mickey Mouse"/> },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
];

export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GYF1eYbfbH5k';
export const demoChannelTitle = 'LO';
export const demoVideoTitle = 'Youtube videos';
