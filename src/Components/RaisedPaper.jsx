import React from 'react';
import { Box } from 'grommet';

const RaisedPaper = ({ children }) => (
  <Box 
    width="large"
    align="center"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '2' }}
  >
    {children}
  </Box>
);

export default RaisedPaper;