import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH_DOMAIN,
    clientID: process.env.REACT_APP_AUTH_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH_CALLBACK_URL,
    responseType: 'token id_token',
    scope: 'openid email'
  });

  login() {
    this.auth0.authorize();
  }

  signUp() {
    this.auth0.authorize({
      login_hint: "signup"
    });
  }
  
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          console.log(err);
          reject(err);
        }
      });
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  getExpires() {
    return this.expiresAt;
  }

  getEmail() {
    return this.email;
  }

  getGroup() {
    return this.group;
  }

  getIsVerified() {
    return this.isVerified;
  }

  setSession(authResult) {
    console.log({ authResult });

    // Set the time that the access token will expire at
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.group = authResult.idTokenPayload[`${process.env.REACT_APP_AUTH_DOMAIN}group`];
    this.isVerified = authResult.idTokenPayload.email_verified;
    this.email = authResult.idTokenPayload.email;
  }

  renewSession() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          this.clearSession();
          console.log(err);
          reject();
        }
      });
    });
  }

  clearSession() {
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.group = null;
    this.isVerified = false
    this.email = null;
  }

  logout() {
    this.clearSession();
    this.auth0.logout({ returnTo: process.env.REACT_APP_AUTH_LOGOUT_URL });
  }

  getIsLoggedIn() {
    return new Date().getTime() < this.expiresAt;
  }
}