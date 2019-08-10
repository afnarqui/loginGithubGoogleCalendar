'use strict'

const connectDb = require('./db')
const errorHandler = require('./errorHandler')
const jsonwebtoken = require('jsonwebtoken')

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
  },
   signup: async (root, { input }) => {
      let db  
      let user 

      const {account, password} = input
      try {
        db = await connectDb()
        user = await db.collection('users').findOne({
          account:input.account
        })
      } catch(error) {
        errorHandler(error)
      }
      if (user) {
        throw new Error('User already exists')
      }

      const newUser = await db.collection('users').insertOne(input)

      // return json web token
      return jsonwebtoken.sign(
        { id: newUser._id, account: newUser.account },
        process.env.JWT_SECRET,
        { expiresIn: '1y' }
      )
    }  
}
