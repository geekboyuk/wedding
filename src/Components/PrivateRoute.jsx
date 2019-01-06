import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, path, exact=false, children }) =>
  <Route path={path} exact={exact} render={() =>
    isLoggedIn ?
      children :
      <Redirect to='/' />
  } />

export default PrivateRoute;