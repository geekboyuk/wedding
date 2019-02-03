import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Sorry = ({ ...rest}) => (
    <Box {...rest} >
      <Heading level={2}>Sorry!</Heading>
      <Paragraph>We&apos;re sorry that you can&apos;t make it.</Paragraph>
    </Box>
);

export default Sorry;