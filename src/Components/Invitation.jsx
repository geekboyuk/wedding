import React from 'react';
import { Box } from 'grommet';

import InvitationDaytime from './InvitationDaytime';
import InvitationEvening from './InvitationEvening';
import Rsvp from './Rsvp';

const Invitation = ({ inviteType, onRsvp, ...rest }) => (
  <Box {...rest}>
    { inviteType === 'Day' ? <InvitationDaytime /> : <InvitationEvening /> }
    <Rsvp onSubmit={onRsvp} />
  </Box>
);

export default Invitation;