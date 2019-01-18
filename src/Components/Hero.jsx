import React from 'react';
import { Box } from 'grommet';

const Hero = ({ background, children }) => (
  <Box 
    fill 
    background={background}
    align="center"
  >
    <Box 
      fill
      width="large"
      align="center"
      background={{
        color: "brand",
        dark: false,
        opacity: "medium",
      }}
      pad="large"
    >
      {children}
    </Box>
  </Box>
);

export default Hero;