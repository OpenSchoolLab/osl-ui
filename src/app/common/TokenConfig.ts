export class TokenConfig {
  private _auth = {
    apiBase:                    '/core',
    apiPath:                    null,

    signInPath:                 'auth/sign_in',
    signInRedirect:             null,
    signInStoredUrlStorageKey:  null,

    signOutPath:                'auth/sign_out',
    validateTokenPath:          'auth/validate_token',
    signOutFailedValidate:      false,

    registerAccountPath:        'auth',
    deleteAccountPath:          'auth',
    registerAccountCallback:    window.location.href,

    updatePasswordPath:         'auth',
    resetPasswordPath:          'auth/password',
    resetPasswordCallback:      window.location.href,

    oAuthBase:                  window.location.origin,
    oAuthPaths: {
      github:                 'auth/github'
    },
    oAuthCallbackPath:          'oauth_callback',
    oAuthWindowType:            'newWindow',
    oAuthWindowOptions:         null,

    userTypes:                  null,

    globalOptions: {
      headers: {
        'Content-Type':     'application/json',
        'Accept':           'application/json'
      }
    }
  };
  getAuth() {
    return this._auth;
  }
}
