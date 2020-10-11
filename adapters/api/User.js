const { isBlank } = require('../util')

class User {

  constructor(client, options) {
      this.client = client
      this.options = options
  }

  getEmailBinusianId() {
    const API_PATH = '/api/Binusmaya/ProfileDB/V1/Profile/Profile/GetEmailBinusianID'
    return this.client.$axios.post(API_PATH, {}, { headers: this._headers() })
        .then(response => response.data)
        .catch(err => {
          throw new Error(err.response.data.error_description)
        })
  }

  getUserLoginDetail(binusianId) {
    const API_PATH = '/api/BinusMobile/Student/V1/Login/Login/GetStudentLoginDetail'

    if (isBlank(binusianId)) {
      throw new Error('Please set valid `binusianId`')
    }

    return this.client.$axios.post(API_PATH,
        this.client.$request.formdata({
          BinusianID: binusianId
        }, []),
        {
            headers: this._headers()
        })
        .then(response => response.data)
        .catch(err => {
          throw new Error(err.response.data.error_description)
        })
  }

  getBinusianPhoto(binusianId, acadCareer, emplid, roleID) {
    const API_PATH = '/api/Base/V1/BinusianPhoto/BinusianPhoto/get'

    if (isBlank(binusianId)) {
      throw new Error('Please set valid `binusianId`')
    }

    if (isBlank(acadCareer)) {
      throw new Error('Please set valid `acadCareer`')
    }

    if (isBlank(emplid)) {
      throw new Error('Please set valid `emplid`')
    }

    if (isBlank(roleID)) {
      throw new Error('Please set valid `roleID`')
    }

    return this.client.$axios.post(API_PATH,
        this.client.$request.formdata({
          BinusianID: binusianId,
          acadCareer,
          emplid,
          roleID
        }),
        {
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
