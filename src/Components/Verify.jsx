import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Verify = ({ email, ...rest }) => (
    <Box {...rest}>
        <Heading level={2}>Verify</Heading>
        <Paragraph>Could you please verify your email address: {email}</Paragraph>
        <Paragraph>If this is not your email address Log Out then Sign Up with your correct email address.</Paragraph>
        <Heading level={3}>Why?</Heading>
        <Paragraph>It just helps make sure that we can get in touch with you</Paragraph>
    </Box>
);

export default Verify;