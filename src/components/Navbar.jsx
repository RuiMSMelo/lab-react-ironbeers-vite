import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className='navbar'>
      <Link className='navbarLink' to="/"><img src="https://cdn4.iconfinder.com/data/icons/user-interface-33/80/Home-512.png" alt="home icon"/></Link>
    </nav>
  )
}

export default Navbar