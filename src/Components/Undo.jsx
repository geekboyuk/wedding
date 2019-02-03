import React from 'react';
import { Box, Button, Form, Paragraph } from 'grommet';

const Undo = ({ onSubmit, ...rest }) => (
    <Box {...rest}>
        <Paragraph>If you would like to change your mind...</Paragraph>
        <Form onSubmit={onSubmit}>
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="submit" label="RSVP" />
            </Box>
        </Form>
    </Box>
);

export default Undo;