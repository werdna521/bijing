const Adapter = require('./Adapter')

const BASE_URL = '/oauth2/adapi/token';

class Auth extends Adapter {

  constructor(client) {
    super(client)
    this.baseURL = BASE_URL
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

    return this.client.$http.post(this.url(''), requestBody)
      .then(res => {
        this.client.$stash.storeAccessToken(res['access_token'])
        return res
      })
  }
}

module.exports = Auth