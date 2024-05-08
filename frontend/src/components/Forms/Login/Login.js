import React from 'react'
import '../Login/Login.css'
import loginImage from '../../../assets/buger.webp'
import kfclogo from '../../../assets/logo.png'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='form-container'>
            <div>
                <img src={kfclogo} className='kfclogo-login' alt=''/>
            </div>
        <form>
            <div>E-mail</div>
         <input 
        type="email" 
        name="email" 
        placeholder="Your email" 
        
      />
      <div>Password</div>
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
