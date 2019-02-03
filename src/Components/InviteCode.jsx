import React from 'react';
import { Box, Button, Heading, Paragraph, Form, FormField } from 'grommet';

const InviteCode = ({ group, onSubmit, isError, ...rest }) => (
    <Box {...rest}>
        <Heading level={2}>Invitation Code</Heading>
        <Paragraph>You should have been given a two word invitation code when we sent you the address of this website, which you can enter here:</Paragraph>
        <Form onSubmit={onSubmit} errors={{inviteCode: isError && 'Sorry, did you type that correctly?'}}>
            <FormField
                name="inviteCode"
                required
                validate={{ 
                    regexp: /^\s*\w+\s+\w+\s*$/i,
                    message: "The two word code on your invitation"
                }}
            />
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="submit" label="Update" />
            </Box>
        </Form>
        <Heading level={3}>Why?</Heading>
        <Paragraph>This is so we can link your email address to your invitation details. You&apos;ll only have to do this once.</Paragraph>
    </Box>
);

export default InviteCode;