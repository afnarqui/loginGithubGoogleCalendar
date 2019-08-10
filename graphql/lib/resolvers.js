'use strict'

const users = [
  {
    _id: 'anyid',
    account: 'afnarqui',
    password: 'password'
  }
]

module.exports = {
  getUsers: () => {
    return users
  }
}
