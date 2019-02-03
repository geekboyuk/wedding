import React from 'react';
import { Box, Heading, Text } from 'grommet';

const WeddingOf = (props) => (
    <Box {...props} align="center" justify="center" elevation="large" margin="xlarge">
        <Heading level={1} size="large">
            Hannah <Text color="accent-1" size="50px">&amp;</Text> Chris<br/>
        </Heading>
        <Heading level={2}>
            We&apos;re getting married<br/>
        </Heading>
        <Heading level={1} size="large">
            12<sup><Text color="accent-1" size="50px">th</Text></sup> October 2019
        </Heading>
    </Box>
);

export default WeddingOf;