const Auth = require('./adapters/auth')
const Api = require('./adapters/api')
const Enkerip = require('enkerip')
const Request = require('./helpers/request')
const UserAgentHandler = require('./helpers/useragent/handler')
const axios = require('axios');
const AVAILABLE_ADAPTERS = { auth: Auth, api: Api }

class Bijing {
    constructor(options = {}) {
        this.$options = {}

        if (!options.baseUrl) {
            throw new Error('`baseUrl` option is required')
        } else {
            this.$options.baseUrl = options.baseUrl
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
        this.$axios = axios.create({
            baseURL: this.$options.baseUrl,
            headers: {
                'User-Agent': new UserAgentHandler().getIosUserAgent({})
            }
        })
    }

    useAdapter (name, options = {}) {
        this[name] = new AVAILABLE_ADAPTERS[name](this, options)
        return this[name].registerAdapter()
    }
}

module.exports = Bijing
