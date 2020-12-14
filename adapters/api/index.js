const Adapter = require('../Adapter')
const Assignment = require('./Assignment')
const Student = require('./Student')
const User = require('./User')

class Api extends Adapter {

  constructor(client) {
    super(client)

    // * install sub-adapters
    this.assignment = new Assignment(client)
    this.student = new Student(client)
    this.user = new User(client)
  }
}

module.exports = Api
