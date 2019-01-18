import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Grommet, Box } from 'grommet';
import { createBrowserHistory } from "history"

import theme from './theme'

import Auth from './Components/Auth';
import Routes from './Routes';
import AppHeader from './Components/AppHeader';


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
      isLoggedIn: auth.isLoggedIn(),
    });
    auth.renewSession().then(() => {
      const isLoggedIn = auth.isLoggedIn();
          this.setState({
            isLoggedIn,
            isAuthenticating: false,
          });
    }).catch(() => this.setState({ isAuthenticating: false }));
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
          const isLoggedIn = auth.isLoggedIn();
          this.setState({
            isLoggedIn,
            isAuthenticating: false,
          });
          isLoggedIn && history.push('/home');
        })
        .catch(() => this.setState({ isAuthenticating: false }));
    }
  }

  render() {
    const { isAuthenticating, isLoggedIn } = this.state;

    return (
      <Router history={history}>
        <Grommet full theme={theme}>
          <Box flex>
            <AppHeader
              isLoggedIn={isLoggedIn}
              isAuthenticating={isAuthenticating}
              onSignUp={this.onSignUp}
              onLogin={this.onLogin}
              onLogout={this.onLogout}
            />
            <Routes isAuthenticating={isAuthenticating} isLoggedIn={isLoggedIn} onCallback={this.onCallback} />
          </Box>
        </Grommet>
      </Router>
    );
  }
};

export default App;
