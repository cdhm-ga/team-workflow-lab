'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = event => {
  event.preventDefault()
  api.index()
    .then(ui.getBooksSuccess)
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#get-books-button').on('click', onGetBooks)
}

module.exports = {
  eventHandlers
}
