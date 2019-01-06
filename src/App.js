import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './Containers/Landing';
import Home from './Containers/Home';

import Auth from './Components/Auth';
import Callback from './Components/Callback';
import AppHeader from './Components/AppHeader';
import PrivateRoute from './Components/PrivateRoute';

import './App.css';

const auth = new Auth();

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
      <Router>
        <div>
          <AppHeader
            isLoggedIn={isLoggedIn}
            isAuthenticating={isAuthenticating}
            onSignUp={this.onSignUp}
            onLogin={this.onLogin}
            onLogout={this.onLogout}
          />
          { !isAuthenticating && (
            <div>
              <Route path="/" exact component={Landing}/>
              <PrivateRoute isLoggedIn={isLoggedIn} path="/home">
                <Home />
              </PrivateRoute>
              <Route path="/callback" render={(props) => (<Callback onCallback={this.onCallback} {...props} />)} />
            </div>
          )}
        </div>
      </Router>
    );
  }
};

export default App;
