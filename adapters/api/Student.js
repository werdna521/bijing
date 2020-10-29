const { isBlank } = require('../util')

class Student {

  constructor(client, options) {
    this.client = client
    this.options = options
  }

  getStudentCourseData({acadCareer, emplId, strm, userId}) {
    const API_PATH = '/api/Oracle/General/V1/General/General/GetCourseDataStudent'

    if (isBlank(acadCareer)) {
      throw new Error('Please set valid `acadCareer`')
    }

    if (isBlank(emplId)) {
      throw new Error('Please set valid `emplId`')
    }

    if (isBlank(strm)) {
      throw new Error('Please set valid `strm`')
    }

    if (isBlank(userId)) {
      throw new Error('Please set valid `roleID`')
    }

    let requestBody = this.client.$request.json({
      acadCareer,
      emplId,
      strm,
      userId
    })

    return this.client.$axios.post(API_PATH,
      requestBody,
      {
        headers: this._headers()
      })
      .then(response => response.data)
      .catch(err => {
        throw new Error(err.response.data.error_description)
      })
  }

  getStudentEventReminder({acadCareer, emplId, institution, studentType}) {
    const API_PATH = '/api/BinusMobile/Student/V1/Schedule/Schedule/GetEventReminder'

    if (isBlank(acadCareer)) {
      throw new Error('Please set valid `acadCareer`')
    }

    if (isBlank(emplId)) {
      throw new Error('Please set valid `emplId`')
    }

    if (isBlank(institution)) {
      throw new Error('Please set valid `institution`')
    }

    if (isBlank(studentType)) {
      throw new Error('Please set valid `studentType`')
    }

    let requestBody = this.client.$request.json({
      acadCareer,
      emplId,
      institution,
      studentType
    })

    return this.client.$axios.post(API_PATH,
      requestBody,
      {
        headers: this._headers()
      })
      .then(response => response.data)
      .catch(err => {
        throw new Error(err.response.data.error_description)
      })
  }

  getStudentGPA({binusianId, acadCareer, emplId, roleID}) {
    const API_PATH = '/api/Oracle/LMS/V1/GPA/GPA/GetStudentGPA'

    if (isBlank(binusianId)) {
      throw new Error('Please set valid `binusianId`')
    }

    if (isBlank(acadCareer)) {
      throw new Error('Please set valid `acadCareer`')
    }

    if (isBlank(emplId)) {
      throw new Error('Please set valid `emplId`')
    }

    if (isBlank(roleID)) {
      throw new Error('Please set valid `roleID`')
    }

    let requestBody = this.client.$request.json({
      BinusianID: binusianId,
      acadCareer,
      emplId,
      roleID
    }, ["roleID"])

    return this.client.$axios.post(API_PATH,
      requestBody,
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

module.exports = Student
