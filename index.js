const Auth = require('./adapters/Auth')
const Api = require('./adapters/api')
const Enkerip = require('enkerip')
const HTTP = require('./helpers/http');
const Request = require('./helpers/request')
const Stash = require('./helpers/stash')

const AVAILABLE_ADAPTERS = {
  auth: Auth,
  api: Api
}

class Bijing {
  constructor(options = {}) {
    this.$options = {}

    if (!options.baseURL) {
      throw new Error('`baseUrl` option is required')
    } else {
      this.$options.baseURL = options.baseURL
    }

    if (!options.clientSecret1) {
      throw new Error('`clientSecret1` option is required')
    } else {
      this.$options.clientSecret1 = options.clientSecret1
    }

    if (!options.clientSecret2) {
      throw new Error('`clientSecret2` option is required')
    } else {
      this.$options.clientSecret2 = options.clientSecret2
    }

    const enkerip = new Enkerip({
      secret1: this.$options.clientSecret1,
      secret2: this.$options.clientSecret2,
      padLength: 32,
    })

    // * plugin and mixin installation
    this.$request = new Request(enkerip)
    this.$http = new HTTP(this.$options.baseURL)
    this.$stash = new Stash()
  }

  useAdapter(name) {
    this[name] = new AVAILABLE_ADAPTERS[name](this)
    return this[name].registerAdapter()
  }
}

module.exports = Bijing