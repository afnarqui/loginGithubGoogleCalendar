import React from 'react'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { Register } from './pages/Register'
import { GlobalStyles } from './styles/GlobalStyles'

import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Home path='/' />
      </Router>

      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <User path='/' />
              </Router>
              : <Router>
                <Register path='/user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </div>
  )
}
