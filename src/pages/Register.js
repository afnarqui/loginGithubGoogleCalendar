import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const Register = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <Fragment>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ account, password }) => {
                  const input = { account, password }
                  const variables = { input } 
                  register({ variables }).then(activateAuth)
                }

                const errorMessage = error && 'Error in the proccess'
                return <UserForm error={errorMessage} title='Register' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>

          {/* <UserForm title='Login' onSubmit={activateAuth} />  */}
        </Fragment>
      }
    }
  </Context.Consumer>
)
