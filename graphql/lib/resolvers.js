'use strict'
const connectDb = require('./db')
const { ObjectID } = require('mongodb')

const users = [
  {
    _id: 'anyid',
    account: 'afnarqui',
    password: 'password'
  }
]

module.exports = {
  Query: {
  getUsers: async () => {
    let db, users = []
    try {
      db = await connectDb()
      users = await db.collection('users').find().toArray()
    } catch(error) {
      console.error(error)
    }
    return users
  },
  getUser: async (root, args) => {
    let db
    let user

    try {
      db = await connectDb()
      user = await db.collection('users').findOne({_id: ObjectID(args.id)})
    } catch(error) {
      console.error(error)
    }
    return user
  }
}
}
