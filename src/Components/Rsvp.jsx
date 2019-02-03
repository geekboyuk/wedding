import React from 'react';
import { Box, Button, Heading, Form, FormField } from 'grommet';

import RadioButtonGroup from './RadioButtonGroup';

const Rsvp = ({ onSubmit, ...rest }) => (
    <Box {...rest}>
        <Heading level={2}>RSVP</Heading>
        <Form onSubmit={onSubmit}>
            <FormField
                name="response"
                component={RadioButtonGroup}
                pad
                options={[
                    { label: "I am looking forward to attend your wedding", value: "accept" },
                    { label: "I am sorry I am not able to join you", value: "decline" }
                ]}
            />
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="submit" label="Respond" />
            </Box>
        </Form>
    </Box>
);

export default Rsvp;