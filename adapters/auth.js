const axios = require('axios')
const Enkerip = require('enkerip')
const { isBlank } = require('./util')

const OAUTH_TOKEN_PATH = '/oauth2/adapi/token';

class Auth {
    constructor(client) {
        this.client = client

        this.enkerip = new Enkerip({
            secret1: client.options.clientSecret1,
            secret2: client.options.clientSecret2,
            padLength: 32,
        })
    }

    registerAdapter() {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }

    login (email, password) {
        if (isBlank(email) || isBlank(password)) {
            throw new Error('Please set valid `email` and `password`')
        }

        return new Promise(((resolve, reject) => {
            this.userAuth(email, password).then(response => {
                resolve(response.data)
            }).catch(e => {
                reject(e)
            })
        }))
    }

    userAuth(email, password) {
        return axios.post(`${this.client.options.baseUrl}${OAUTH_TOKEN_PATH}`, this.requestBuilder(email, password))
    }

    requestBuilder(email, password) {
        const encryptedUsername = this.enkerip.encrypt(email)
        const encryptedPassword = this.enkerip.encrypt(password)
        return `username=${encryptedUsername}&password=${encryptedPassword}&client_type=binus&grant_type=password`
    }
}

module.exports = Auth
