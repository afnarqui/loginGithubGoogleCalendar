import React from 'react'
import { Login } from '../components/Login'
import { GlobalStyle } from '../styles/GlobalStyles'

export const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Login />
    </div>
  )
}
