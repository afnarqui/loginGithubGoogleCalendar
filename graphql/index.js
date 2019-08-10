'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const app = express()
const port = process.env.port || 3000

const schema = buildSchema(
  readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
  )
  )

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
