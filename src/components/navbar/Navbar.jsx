import React from 'react'
import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const { user,dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
    navigate("/");
  }
  return (
    <nav className='navbarWrapper'>
      <div className="container">
        <div className="navbar">
          <span className='logo'>
            <NavLink to="/">Booking</NavLink>
          </span>
          {
            user ? (
              
              <div className="navbarItem">
                <Link to="/dashboard">
                    <button className="navBtn me-3">Dashboard</button>
                </Link>
                <button className="navBtn me-3 text-success" disabled>{user.username}</button>
                <button className="navBtn logout" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="navbarItem">
                <button className="navBtn me-3">Register</button>
                <button className="navBtn" onClick={()=>navigate("/login")}>sign in</button>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar