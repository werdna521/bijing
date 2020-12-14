const {
  isBlank
} = require('../util')

class Assignment {

  constructor(client, options) {
    this.client = client
    this.options = options
  }

  sayHello() {
    console.log('hello from assignment')
  }

  getListAssignmentByType({
    acadCareer,
    assignmentTypeId,
    classNbr,
    strm,
    studentType,
    userId
  }) {
    const API_PATH = "/api/BinusMobile/Student/V1/Assignment/Assignment/GetListAssignmentByType"

    if (isBlank(acadCareer)) {
      throw new Error('Please set valid `acadCareer`')
    }

    if (isBlank(assignmentTypeId)) {
      throw new Error('Please set valid `assignmentTypeId`')
    }

    if (isBlank(classNbr)) {
      throw new Error('Please set valid `classNbr`')
    }

    if (isBlank(strm)) {
      throw new Error('Please set valid `strm`')
    }

    if (isBlank(studentType)) {
      throw new Error('Please set valid `studentType`')
    }

    if (isBlank(userId)) {
      throw new Error('Please set valid `userId`')
    }

    let requestBody = this.client.$request.json({
      acadCareer,
      assignmentTypeId,
      classNbr,
      strm,
      studentType,
      userId
    })

    return this.client.$axios.post(API_PATH,
        requestBody, {
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

module.exports = Assignment