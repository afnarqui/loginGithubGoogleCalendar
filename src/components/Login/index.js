import React from 'react'
import { Div } from './styles'
import { withUser } from '../../hoc/withUser'
// import { Button } from '../Button'
// import GithubList from '../GithubList'

const LoginComponent = (props) => {
  console.log(props)
  return(
    <Div>
      <h1>login</h1>
 
    </Div>
  )
}

export const Login = withUser(LoginComponent)