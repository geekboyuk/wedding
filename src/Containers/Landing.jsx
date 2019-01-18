import React from 'react';
import Hero from '../Components/Hero';
import WeddingOf from '../Components/WeddingOf';

const Landing = () => (
  <Hero
    background={{
      image: "url(/engagement.jpg)",
      position: "top"
    }}
  >
    <WeddingOf />
  </Hero>
);

export default Landing;