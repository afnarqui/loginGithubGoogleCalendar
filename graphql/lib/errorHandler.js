'use strict'

function errorHandler (error) {
    console.error(error)

    throw new Error('Error in the server', error)
}

module.exports = errorHandler
