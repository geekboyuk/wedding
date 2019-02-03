import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const ThankYou = ({ ...rest}) => (
    <Box {...rest} >
      <Heading level={2}>Thank You!</Heading>
      <Paragraph>We&apos;re glad you can make it and look forward to you joining us on our happy day.</Paragraph>
    </Box>
);

export default ThankYou;