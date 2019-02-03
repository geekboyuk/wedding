import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Router } from "react-router-dom";
import { Grommet, Box } from 'grommet';
import { createBrowserHistory } from "history"

import theme from './theme'
import Auth from './Components/Auth';
import AppHeader from './Components/AppHeader';
import Landing from './Containers/Landing';
import Home from './Containers/Home';
import Callback from './Components/Callback';
import PrivateRoute from './Components/PrivateRoute';

const auth = new Auth();

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticating: true,
      isLoggedIn: false,
    }

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.onSignUp = this.onSignUp.bind(this);

    this.onCallback = this.onCallback.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: auth.getIsLoggedIn(),
    });

    auth.renewSession()
      .then(() => this.setAuthState())
      .catch(() => this.setState({ isAuthenticating: false }));
  }

  setAuthState() {
    const isLoggedIn = auth.getIsLoggedIn();

    this.setState({
      isLoggedIn,
      email: auth.getEmail(),
      isVerified: auth.getIsVerified(),
      group: auth.getGroup(),
      isAuthenticating: false,
      token: auth.getAccessToken(),
    });

    return isLoggedIn();
  }

  onLogin() {
    auth.login();
  }

  onSignUp() {
    auth.signUp();
  }

  onLogout() {
    auth.logout();

    this.setState({
      isLoggedIn: false,
    });
  }

  onCallback(location, history) {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication()
        .then(() => {
          this.setAuthState() && history.push('/home');
        })
        .catch(() => {
          this.setState({ isAuthenticating: false });
          history.push('/');
        });
    }
  }

  render() {
    const { isAuthenticating, isLoggedIn, email, isVerified, group, token } = this.state;

    return (
      <Router history={history}>
        <Grommet full theme={theme}>
          <Box flex margin={{ bottom: 'xlarge'}}>
            <AppHeader
              isLoggedIn={isLoggedIn}
              isAuthenticating={isAuthenticating}
              onSignUp={this.onSignUp}
              onLogin={this.onLogin}
              onLogout={this.onLogout}
            />
            {
              isAuthenticating ? 
                null :
                <Box align='center' justify='center'>
                  <Route path="/" exact render={() => isLoggedIn ? <Redirect to='/home' /> : <Landing /> }/>
                  <PrivateRoute isLoggedIn={isLoggedIn} path="/home">
                    <Home
                      token={token}
                      email={email}
                      isVerified={isVerified}
                      group={group}
                    />
                  </PrivateRoute>
                  <Route path="/callback" render={(props) => (<Callback onCallback={this.onCallback} {...props} />)} />
                </Box>
            }
          </Box>
        </Grommet>
      </Router>
    );
  }
};

export default App;
