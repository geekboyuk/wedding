import React from 'react';
import { Box, Heading} from 'grommet';

import Hero from '../Components/Hero';
import WeddingOf from '../Components/WeddingOf';

const Home = () => (
  <Box fill align="center">
    <Hero
      background={{
        image: "url(/engagement.jpg)",
        position: "top"
      }}
    >
      <WeddingOf />
    </Hero>
    <Heading textAlign="center" level={4}>And we would like you to join us!</Heading>
  </Box>
);

export default Home;