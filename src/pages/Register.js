import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const Register = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <Fragment>
          <UserForm title='Register' onSubmit={ activateAuth } />
          <UserForm title='Login' onSubmit={ activateAuth } />
        </Fragment>
      }
    }
  </Context.Consumer>
)
