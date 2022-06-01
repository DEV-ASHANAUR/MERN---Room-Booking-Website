import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbarWrapper'>
        <div className="container">
            <div className="navbar">
            <span className='logo'>
              <NavLink to="/">Booking</NavLink>
              </span>
            <div className="navbarItem">
                <button className="navBtn me-3">Register</button>
                <button className="navBtn">sign up</button>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar