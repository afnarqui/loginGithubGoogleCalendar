import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ error, disabled,title, onSubmit }) => {
  const account = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ account: account.value, password: password.value })
  }

  return (
    <Fragment>
      <Title>{ title }</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='account' {...account} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      { error && <Error>{ error }</Error>}
    </Fragment>
  )
}
