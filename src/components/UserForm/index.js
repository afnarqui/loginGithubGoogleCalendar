import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const account = useInputValue('')
  const password = useInputValue('')

  return (
    <Fragment>
      <Title>{ title }</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholer="account" {...account} />
        <Input placeholer="password" type="password" {...password}/>
        <Button>{title}</Button>
      </Form>
    </Fragment>
  )
}