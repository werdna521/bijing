const Adapter = require('../Adapter')

const BASE_URL = {
  'profile': '/api/Binusmaya/ProfileDB/V1/Profile/Profile/GetEmailBinusianID',
  'login': '/api/BinusMobile/Student/V1/Login/Login/GetStudentLoginDetail',
  'photo': '/api/Base/V1/BinusianPhoto/BinusianPhoto/get'
}

class User extends Adapter {

  constructor(client) {
    super(client)
    this.baseURL = BASE_URL
  }

  getBinusianId(payload = {}) {
    const { accessToken } = payload
    this.requiresAccessToken(accessToken)

    return this.client.$http.post(this.url('', 'profile'), {}, this.headers())
  }

  getUserLoginDetail(payload = {}) {
    const { accessToken } = payload
    this.requiresAccessToken(accessToken)

    return this.client.$http.post(this.url('', 'login'), {}, this.headers())
  }

  getBinusianPhoto(payload = {}) {
    const { accessToken } = payload
    this.requiresAccessToken(accessToken)

    return this.client.$http.post(this.url('', 'photo'), {}, this.headers())
  }

}

module.exports = User