'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const app = express()
const port = process.env.port || 3000

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const resolvers = {
  hello: () => {
    return 'aja'
  }
}

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log('server is listening at http://localhost:3000')
})
