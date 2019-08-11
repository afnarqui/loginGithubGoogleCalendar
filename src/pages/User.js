import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { Button } from '../components/Button'

export const User = () => {
  const { removeAuth } = useContext(Context)
  
  return <Fragment>
    <h1>user</h1>
    <Button onClick={removeAuth}>Cerra sesión</Button>
  </Fragment>
}
