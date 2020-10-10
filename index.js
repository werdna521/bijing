const Auth = require('./adapters/auth')
const Api = require('./adapters/api')
const AVAILABLE_ADAPTERS = { auth: Auth, api: Api }

class Bijing {
    constructor(options = {}) {
        this.options = {}

        if (!options.baseUrl) {
            throw new Error('`baseUrl` option is required')
        } else {
            this.options.baseUrl = options.baseUrl
        }

        if (!options.clientSecret1) {
            throw new Error('`clientSecret1` option is required')
        } else {
            this.options.clientSecret1 = options.clientSecret1
        }

        if (!options.clientSecret2) {
            throw new Error('`clientSecret2` option is required')
        } else {
            this.options.clientSecret2 = options.clientSecret2
        }
    }

    useAdapter (name = {}) {
        this[name] = new AVAILABLE_ADAPTERS[name](this)
        return this[name].registerAdapter()
    }
}

module.exports = Bijing
