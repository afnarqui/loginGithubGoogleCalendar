'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
  getUsers: async () => {
    let db; let users = []
    try {
      db = await connectDb()
      users = await db.collection('users').find().toArray()
    } catch (error) {
      errorHandler(error)
    }
    return users
  },
  getUser: async (root, args) => {
    let db
    let user

    try {
      db = await connectDb()
      user = await db.collection('users').findOne({ _id: ObjectID(args.id) })
    } catch (error) {
      errorHandler(error)
    }
    return user
  },
  getUserAccount: async (root, args) => {
    let db
    let user

    try {
      db = await connectDb()
      user = db.collection('users').findOne(
        { account: args.account }
      )
    } catch (error) {
      errorHandler(error)
    }
    return user
  }
}
