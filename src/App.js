import React from 'react'
import { Home } from './pages/Home'
import { Login } from './components/Login'
import { Github } from './components/Github'

import { User } from './pages/User'
import { Register } from './pages/Register'
import { GlobalStyles } from './styles/GlobalStyles'

import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Home path='/' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <User path='/user' />
                <Login path='/login' />
                <Github path='/Github' />
                
              </Router>
              : <Router>
                 <Register path='/' /> 
              </Router>
        }
      </Context.Consumer>
     
      <NavBar />
    </div>
  )
}
