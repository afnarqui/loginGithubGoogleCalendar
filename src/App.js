import React from 'react'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <div>
      <Router>
        <Home path='/' />
      </Router>
      <NavBar />
    </div>
  )
}
