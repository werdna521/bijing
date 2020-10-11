const { isBlank } = require('../util')
const Assignment = require('./Assignment')
const User = require('./User')

class Api {
    
  constructor(client, options) {
    this.client = client

    this.options = {
      isBlank(key) {
        return isBlank(this[key]);
      },
      validate(keys, message) {
        keys.forEach((key) => {
          if (this.isBlank(key)) {
            throw new Error(message);
          }
        });
      },
      toParams() {
        return {
          accessToken: this.accessToken
        };
      }
    }

    this.options.fetchOptions = {}

    Object.keys(options).forEach((key) => {
      if (this._validOptionKeys().includes(key)) {
        this.options[key] = options[key];
      } else {
        this.options.fetchOptions[key] = options[key]
      }
    })

    this.options.validate(['accessToken'], 'Please set valid `accessToken` options');

    // * install sub-adapters
    this.assignment = new Assignment(client, options)
    this.user = new User(client, options)
  }

  registerAdapter() {
    return new Promise(resolve => resolve())
  }

  _validOptionKeys () {
    return ['accessToken'];
  }
}

module.exports = Api
