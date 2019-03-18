'use strict'

const bookListing = require('../templates/books/book-listing.handlebars')

const getBooksSuccess = responseData => {
  const booksHtml = bookListing({ books: responseData.books })
  $('#content').append(booksHtml)
  userFeedback('Success.')
}

const userFeedback = message => {
  $('#user-message').text(message)
  $('#user-message').show()
  setTimeout(() => $('#user-message').fadeOut(500), 2500)
}

const errorMessage = () => {
  userFeedback('Something went wrong.')
}

module.exports = {
  getBooksSuccess,
  errorMessage
}
