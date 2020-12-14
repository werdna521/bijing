class User {

  constructor(client, options) {
    this.client = client
    this.options = options
  }

  getEmailBinusianId() {
    const API_PATH = '/api/Binusmaya/ProfileDB/V1/Profile/Profile/GetEmailBinusianID'
    return this.client.$http.post(API_PATH, {}, {
        headers: this._headers()
      })
      .then(response => response.data)
      .catch(err => {
        throw new Error(err.response.data.error_description)
      })
  }

  getUserLoginDetail() {
    const API_PATH = '/api/BinusMobile/Student/V1/Login/Login/GetStudentLoginDetail'

    return this.client.$http.post(API_PATH, {}, {
        headers: this._headers()
      })
      .then(response => response.data)
      .catch(err => {
        throw new Error(err.response.data.error_description)
      })
  }

  getBinusianPhoto() {
    const API_PATH = '/api/Base/V1/BinusianPhoto/BinusianPhoto/get'

    return this.client.$http.post(API_PATH, {}, {
        headers: this._headers()
      })
      .then(response => response.data)
      .catch(err => {
        throw new Error(err.response.data.error_description)
      })
  }

  _headers() {
    return {
      Authorization: `Bearer ${this.options.accessToken}`
    }
  }

}

module.exports = User