import React from 'react'
import '../Login/Login.css'
import loginImage from '../../../assets/buger.webp'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='form-container'>
        <form>
         <input 
        type="email" 
        name="email" 
        placeholder="Your email" 
        
      />
      <input 
        type="password"  
        name="password"  
        placeholder="Your password"  
      
      />
      <button type="submit">Submit</button>
    </form>
        </div>
        <div className='form-image-container'>
            <img src={loginImage} className='form-image-container' />
        </div>
    </div>
  )
}

export default Login
