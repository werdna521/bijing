const {
  isBlank
} = require('./util')

const OAUTH_TOKEN_PATH = '/oauth2/adapi/token';

class Auth {

  constructor(client) {
    this.client = client
  }

  registerAdapter() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  login(email, password) {
    if (isBlank(email) || isBlank(password)) {
      throw new Error('Please set valid `email` and `password`')
    }

    return this.userAuth(email, password)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err.response.data.error_description)
      })
  }

  userAuth(email, password) {
    return this.client.$axios.post(OAUTH_TOKEN_PATH,
      this.client.$request.formdata({
        username: email,
        password,
        client_type: 'binus',
        grant_type: 'password',
      }, ['client_type', 'grant_type'])
    )
  }
}

module.exports = Auth