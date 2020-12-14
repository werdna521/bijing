class Stash {
  constructor() {
    this.accessToken = ''
  }

  storeAccessToken(token) {
    this.accessToken = token
  }
}

module.exports = Stash
