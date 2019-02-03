import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { Box } from "grommet";

import Landing from './Containers/Landing';
import Home from './Containers/Home';
import Callback from './Components/Callback';
import PrivateRoute from './Components/PrivateRoute';

const Routes = ({
  isAuthenticating, 
  isLoggedIn, 
  onCallback,
  email,
  isVerified,
  group,
}) => 
  isAuthenticating ? 
    null :
    <Box align='center' justify='center'>
      <Route path="/" exact render={() => isLoggedIn ? <Redirect to='/home' /> : <Landing /> }/>
      <PrivateRoute isLoggedIn={isLoggedIn} path="/home">
        <Home
          email={email}
          isVerified={isVerified}
          group={group}
        />
      </PrivateRoute>
      <Route path="/callback" render={(props) => (<Callback onCallback={onCallback} {...props} />)} />
    </Box>

export default Routes;