import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ error, title, onSubmit }) => {
  const account = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ account: account.value, password: password.value })
  }

  return (
    <Fragment>
      <Title>{ title }</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='account' {...account} />
        <Input placeholder='password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
      { error && <Error>{ error }</Error>}
    </Fragment>
  )
}
