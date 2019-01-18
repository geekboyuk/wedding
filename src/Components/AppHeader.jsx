import React from 'react';
import { Box, Button } from 'grommet';

const AppHeader = ({ isAuthenticating, isLoggedIn, onSignUp, onLogin, onLogout }) => 
  <Box direction="row" pad="small" background="brand">
    <Box margin="auto"/>
    <Box direction="row">
    {!isAuthenticating && isLoggedIn && (<Button onClick={onLogout} label="Log Out" />)}
    {!isAuthenticating && !isLoggedIn && (<Button onClick={onSignUp}  label="Sign Up" />)}
    {!isAuthenticating && !isLoggedIn && (<Button onClick={onLogin}  label="Log In" />)}
    </Box>
  </Box>

export default AppHeader;