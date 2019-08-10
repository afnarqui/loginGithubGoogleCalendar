'use strict'

const connectDb = require('./db')
const errorHandler = require('./errorHandler')

module.exports = {
  createUser: async (root, { input }) => {
    let db
    let user

    try {
      db = await connectDb()
      user = await db.collection('users').insertOne(input)
      input._id = user.insertedId
    } catch (error) {
      errorHandler(error)
    }
    return input
  }
}
