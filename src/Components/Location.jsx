import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Location = ({ address, ...rest}) => {
    <Box {...rest} >
      <Heading level={2}>Save the Date!</Heading>
      <Paragraph>We would love for you to join us in our celebration.</Paragraph>
    </Box>
);

export default Location;