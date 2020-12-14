const {
  isBlank
} = require('./util')

class Adapter {

  constructor(client) {
    this.client = client
    this.baseURL = ''
  }

  registerAdapter() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  requiresAccessToken(accessToken) {
    if (!accessToken && !this.client.$stash.accessToken) {
      throw new Error('Please login or provide an access token')
    }
    if (accessToken) this.client.$stash.storeAccessToken(accessToken)
  }

  validateRequired(params) {
    const empty = Object.keys(params).filter(key => isBlank(params[key]))
    if (empty.length > 0) {
      throw new Error(`The following keys are required: ${empty.join(', ')}`)
    }
  }

  url(path, part) {
    return `${part ? this.baseURL[part] : this.baseURL}${path}`
  }

  headers() {
    return {
      Authorization: `Bearer ${this.client.$stash.accessToken}`
    }
  }
}

module.exports = Adapter