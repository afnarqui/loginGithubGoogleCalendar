'use strict'

const connectDb = require('./db')

module.exports = {
  createUser: async (root, { input }) => {
    let db
    let user

    try {
      db = await connectDb()
      user = await db.collection('users').insertOne(input)
      input._id = user.insertedId
    } catch (error) {
      console.error(error)
    }
    return input
  }
}
