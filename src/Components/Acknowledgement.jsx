import React from 'react';
import { Box } from 'grommet';

import ThankYou from './ThankYou';
import Sorry from './Sorry';
import Undo from './Undo';

const Acknowledgement = ({ response, onUndo, ...rest }) => (
  <Box {...rest}>
    { response === 'accept' ? <ThankYou /> : <Sorry /> }
    <Undo onSubmit={onUndo} />
  </Box>
);

export default Acknowledgement;