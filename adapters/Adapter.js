const {
  isBlank
} = require('./util')

class Adapter {

  constructor(client) {
    this.client = client
  }

  registerAdapter() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  validateRequired(params, cb) {
    const empty = Object.keys(params).filter(key => isBlank(params[key]))
    if (empty.length > 0) {
      throw new Error(`The following keys are required: ${empty.join(', ')}`)
    }
  }
}

module.exports = Adapter