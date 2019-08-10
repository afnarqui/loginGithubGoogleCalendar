'use strict'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_USER = gql`
{ getUsers{
  _id
  account
  password
}
}
`

export const withUser = graphql(GET_USER)
