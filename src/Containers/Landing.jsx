import React from 'react';
import { Box } from 'grommet';

import applyAnimation from '../Utils/applyAnimation';

import WeddingOf from '../Components/WeddingOf';
import LandingInstructions from '../Components/LandingInstructions';

const Landing = () => (
  <Box>
    <WeddingOf animation={applyAnimation({type: "zoomIn"})}/>
    <LandingInstructions animation={applyAnimation({"delay": 300, duration: 1500})}/>
  </Box>
);

export default Landing;