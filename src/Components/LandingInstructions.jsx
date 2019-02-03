import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const LandingInstructions = (props) => (
    <Box {...props} >
      <Heading level={2}>Help!</Heading>
      <Paragraph>You should have received an invitation code when we sent you the address of this website.  Just Sign-Up and enter the invitation code when prompted.</Paragraph>
      <Paragraph>If you have already signed up please log in</Paragraph>
    </Box>
);

export default LandingInstructions;