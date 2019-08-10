import React from 'react'
import { Div } from './styles'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withUser = graphql(gql`
{ getUsers{
  _id
  account
  password
}
}
`)

const LoginComponent = (props) => {
  console.log(props)
  return (
    <Div>
      <h1>login</h1>
    </Div>
  )
}

export const Login = withUser(LoginComponent)
