import React, { useState } from 'react';
import '../Login/Login.css';
import loginImage from '../../../assets/buger.webp';
import kfclogo from '../../../assets/logo.png';
import axios from 'axios';
import {Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/', { email, password });
      // Handle successful login response here (e.g., redirect to home page)
      console.log(response.data);
    } catch (error) {
      // Handle login error here (e.g., display error message)
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login-container'>
      <div className='form-container'>
        <div>
          <img src={kfclogo} className='kfclogo-login' alt=''/>
        </div>
       <form action='POST'>
              <input type='email' onChange={(e) =>{setEmail(e.target.value)}} placeholder='Email' />
              <input type='password' onChange={(e) =>{setPassword(e.target.value)}} placeholder='Password' />

              <input type='submit' onClick={Submit} />
       </form>
       <br />
       <p>OR</p>
       <br />

       <Link to='/menu'>Sign Up</Link>
      </div>
      <div className='form-image-container'>
        <img src={loginImage} className='form-image-container' alt="Login" />
      </div>
    </div>
  );
};

export default Login;
