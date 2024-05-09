import React, { useState } from 'react';
import '../Login/Login.css';
import loginImage from '../../../assets/buger.webp';
import kfclogo from '../../../assets/logo.png';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { email, password });
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
        <form onSubmit={handleSubmit}>
          <div>E-mail</div>
          <input 
            type="email" 
            name="email" 
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>Password</div>
          <input 
            type="password"  
            name="password"  
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='form-image-container'>
        <img src={loginImage} className='form-image-container' alt="Login" />
      </div>
    </div>
  );
};

export default Login;
