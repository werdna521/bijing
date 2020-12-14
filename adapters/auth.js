const Adapter = require('./Adapter')

const OAUTH_TOKEN_PATH = '/oauth2/adapi/token';

class Auth extends Adapter {

  constructor(client) {
    super(client)
  }

  login({
    email,
    password
  }) {
    this.validateRequired({
      email,
      password
    })

    const requestBody = this.client.$request.formdata({
      username: email,
      password,
      client_type: 'binus',
      grant_type: 'password',
    }, ['client_type', 'grant_type'])

    return this.client.$http.post(OAUTH_TOKEN_PATH, requestBody)
  }
}

module.exports = Auth