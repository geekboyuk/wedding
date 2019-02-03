import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Invitation = ({ ...rest}) => (
    <Box {...rest} >
      <Heading level={2}>Join Us!</Heading>
      <Paragraph>We would like you to join us to celebrate our marriage.</Paragraph>
      <Paragraph>Please join us for an evening of celbration at The Green Man, Stanford at 7pm.</Paragraph>
    </Box>
);

export default Invitation;