import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdEvent } from 'react-icons/md'
import { IoLogoOctocat, IoMdLogOut } from "react-icons/io";
const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHome size={SIZE} />
      </Link>
      <Link to='/Github'>
        <IoLogoOctocat size={SIZE} />
      </Link>    
      <Link to='/calendar'>
        <MdEvent size={SIZE} />
      </Link>
      <Link to='/out'>
        <IoMdLogOut size={SIZE} />
      </Link>
    </Nav>
  )
}
