'use strict'

const config = require('../config.js')

const index = function () {
  return $.ajax({
    url: config.apiUrl + `/books`,
    method: 'GET',
    headers: {
    }
  })
}

module.exports = {
  index
}
