import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { Button } from '../components/Button'
import { Calendar } from '../components/Calendar'

export const User = () => {
const { removeAuth } = useContext(Context)
removeAuth()
  return <Fragment>
    
 {/* <Button onClick={removeAuth}>Log out</Button>  */}

  </Fragment>
}
