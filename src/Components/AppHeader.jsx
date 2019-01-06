import React from "react";

const LoggedOut = ({ onSignUp, onLogin }) => (
  <div>
    <button onClick={onSignUp}>Sign Up</button>
    <button onClick={onLogin}>Log In</button>
  </div>
);

const LoggedIn = ({ onLogout }) => (
  <div>
    <button onClick={onLogout}>Log Out</button>
  </div>
)

const Actions = ({ isAuthenticating, isLoggedIn, onSignUp, onLogin, onLogout }) => 
  isAuthenticating ? 
    null : 
    isLoggedIn ?
      <LoggedIn onLogout={onLogout} /> :
      <LoggedOut onSignUp={onSignUp} onLogin={onLogin} />

const AppHeader = ({ isAuthenticating, isLoggedIn, onSignUp, onLogin, onLogout }) => 
  <div>
    <Actions 
      isAuthenticating={isAuthenticating}
      isLoggedIn={isLoggedIn}
      onSignUp={onSignUp}
      onLogin={onLogin}
      onLogout={onLogout}
    />
    <p>isAuthenticating={isAuthenticating ? 'yes' : 'no'}</p>
    <p>isLoggedIn={isLoggedIn ? 'yes' : 'no'}</p>
  </div>

export default AppHeader;