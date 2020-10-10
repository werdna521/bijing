const { isBlank } = require('../util')
const Assignment = require('./Assignment')

class Api {
    
  constructor(client) {
    this.client = client

    // * install sub-adapters
    this.assignment = new Assignment(client)
  }

  registerAdapter() {
    return new Promise(resolve => resolve())
  }
}

module.exports = Api
