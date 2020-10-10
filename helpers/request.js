class Request {
  // * REQUEST BUILDER -> build encrypted request
  // * currently only supports enkerip

  // * install enkerip
  constructor(enkerip) {
    this.enkerip = enkerip
  }

  // * build request with json payload
  json(payload, blocklist = []) {
    return Object.keys(payload).reduce((acc, key) => Object.assign({}, acc, {
      [key]: this.doEncryption(key, payload, blocklist),
    }), {})
  }

  // * build request with formdata payload
  formdata(payload, blocklist = []) {
    return Object.keys(payload)
      .map(key => `${key}=${this.doEncryption(key, payload, blocklist)}`)
      .join('&')
  }

  // * do encryption while ignoring every keys in blocklist
  doEncryption(key, payload, blocklist) {
    return blocklist.find(list => list === key) 
      ? payload[key] 
      : this.enkerip.encrypt(payload[key])
  }
}

module.exports = Request
