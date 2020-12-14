const axios = require('axios')
const UserAgentHandler = require('./useragent/handler')

class HTTP {
  // * HTTP CLIENT -> do http request

  // * install axios
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'User-Agent': new UserAgentHandler().getIosUserAgent({})
      }
    })
  }

  unwrap(request) {
    return request
      .then(response => response.data)
      .catch(err => {
        throw new Error(JSON.stringify(err.response.data))
      })
  }

  get(url, headers) {
    return unwrap(this.instance.get(url, {
      headers
    }))
  }

  post(url, payload, headers) {
    return this.unwrap(this.instance.post(url, payload, {
      headers
    }))
  }

  put(url, payload, headers) {
    return unwrap(this.instance.put(url, payload, {
      headers
    }))
  }

  delete(url, headers) {
    return unwrap(this.instance.delete(url, {
      headers
    }))
  }
}

module.exports = HTTP
