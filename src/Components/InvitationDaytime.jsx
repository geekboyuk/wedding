import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Invitation = ({ ...rest}) => (
    <Box {...rest} >
      <Heading level={2}>Join Us!</Heading>
      <Paragraph>We would like you to join us to celebrate our marriage.</Paragraph>
      <Paragraph>The ceremony will take place at Stondon Baptist Church at 1pm.</Paragraph>
      <Paragraph>This will be followed by dinner and drinks at The Green Man, Stanford.</Paragraph>
    </Box>
);

export default Invitation;