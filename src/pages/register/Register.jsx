import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';
import '../login/login.css';
const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    confirm_password: undefined
  })

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (credentials.username && credentials.email && credentials.password && credentials.confirm_password) {
      if (credentials.password === credentials.confirm_password) {
        try {
          const res = await axios.post("/auth/register", credentials);
          toast.success("Registation Success.Please Login!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } catch (error) {
          toast.error(error.response.data);
        }
      }else{
        toast.error("password does not match!");
      }
    }else{
      toast.error("All field are required!");
    }

  }
  return (
    <div className='wrapper'>
      <div className="login_wrapper">
        <h2 className="title">Registation Here</h2>
        <div className="input_group">
          <label htmlFor="username">Enter Name</label>
          <input type="text" onChange={handleChange} id="username" placeholder='Enter Username' />
        </div>
        <div className="input_group">
          <label htmlFor="email">Enter Email</label>
          <input type="email" onChange={handleChange} id="email" placeholder='Enter Email' />
        </div>
        <div className="input_group">
          <label htmlFor="password">Enter Password</label>
          <input type="password" onChange={handleChange} id="password" placeholder='Enter password' />
        </div>
        <div className="input_group">
          <label htmlFor="confirm_password">Enter Confirm Password</label>
          <input type="password" onChange={handleChange} id="confirm_password" placeholder='Enter password' />
        </div>
        <Link to="/login" style={{textDecoration:"none"}}>
                Have any account? Login
            </Link>
        <button className='lBtn' onClick={handleClick}>Submit</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register