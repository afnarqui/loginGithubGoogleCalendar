import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { Button } from '../components/Button'

export const User = () => {
  const { removeAuth } = useContext(Context)
  
  return <Fragment>
    <h1>Google Calendar</h1>
    <Button onClick={removeAuth}>Log out</Button>
  </Fragment>
}
