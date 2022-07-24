import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import './login.css';
const Login = () => {
   const location = useLocation();
   let from = location.state?.from?.pathname || "/";
    const [credentials,setCredentials] = useState({
        email:undefined,
        password:undefined,
    })
    const {user,loading,error,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    if(user){
        navigate(from,{replace:true});
    }
    if(error){
        toast.error(error.message,{position: "bottom-right"});
        dispatch({type:"LOGOUT"});
    }
    const handleChange = (e) =>{
        setCredentials((prev)=> ({...prev,[e.target.id]:e.target.value}));
    };
    
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login",credentials);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
            navigate(from,{replace:true});
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE",payload:error.response.data});
        }
    }
  return (
    <div className='wrapper'>
        <div className="login_wrapper">
            <h2 className="title">Login Here</h2>
            <div className="input_group">
                <label htmlFor="email">Enter Email</label>
                <input type="email" onChange={handleChange} id="email" placeholder='Enter Email' />
            </div>
            <div className="input_group">
                <label htmlFor="password">Enter Password</label>
                <input type="password" onChange={handleChange} id="password" placeholder='Enter password' />
            </div>
            <Link to="/register" style={{textDecoration:"none"}}>
                Have no any account? Register
            </Link>
            <button disabled={loading} className='lBtn' onClick={handleClick}>Login</button>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login