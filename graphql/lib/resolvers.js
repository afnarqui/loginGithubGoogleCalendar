'use strict'

const users = [
  {
    _id: 'anyid',
    account: 'afnarqui',
    password: 'password'
  }
]

module.exports = {
  Query: {
  getUsers: () => {
    return users
  },
  getUser: (root, args) => {
    const user = users.filter(user => user._id === args.id)
    return user.pop()
  }
}
}
