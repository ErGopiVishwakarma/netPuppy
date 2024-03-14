import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import HomePage from './Component/HomePage';
import GirlEducation from './Component/GirlEducation';
import HomePage2 from './Component/HomePage2';
import HomePage4 from './Component/HomePage4';
import HomePage3 from './Component/HomePage3';
import HomeImage5 from './Component/HomeImage5';
import HomePage6 from './Component/HomePage6';

function App() {
  return (
    <Box w="100%" m={'auto'}>
      <HomePage />
      <GirlEducation />
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <HomeImage5 />
      <HomePage6 />
    </Box>
  );
}

export default App;
