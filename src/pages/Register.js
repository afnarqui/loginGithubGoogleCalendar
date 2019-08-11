import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

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
                  register({ variables }).then((data)=>{
                    const { signup } = data.data
                    activateAuth(signup)
                  })
                }

                const errorMessage = error && 'Error in the proccess register'
                return <UserForm disabled={loading} error={errorMessage} title='Register' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>
          <LoginMutation>
            {
              (login, {  data, loading, error }) => {
                const onSubmit = ({ account, password }) => {
                  const input = { account, password }
                  const variables = { input } 
                  login({ variables }).then((data)=>{
                    const { login } = data.data
                    activateAuth(login)
                  })
                }

                const errorMessage = error && 'Error in the proccess login'
                return  <UserForm disabled={loading} error={errorMessage}  title='Login' onSubmit={onSubmit} />
              }
            }
          </LoginMutation>
       
        </Fragment>
      }
    }
  </Context.Consumer>
)
