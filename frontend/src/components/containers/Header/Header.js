import React from 'react'
import { Navigate } from 'react-router';
import logo from '../../../assets/logo.png';
import cart from '../../../assets/shopping-cart.png';
import "./Header.css"

const Home = () =>{
    Navigate('/home');
}
const Header = () => {
  return (
    <div className='header'>
        <div>
            <img src={logo} className='header-logo' />  
        </div>
        <div className='header-buttons'>
            <button className='Home-button' onClick={Home}>Home</button>
            <button className='Home-button' onClick={Home}>Menu</button>
            <button className='Home-button' onClick={Home}>About</button>
            <button className='Home-button' onClick={Home}>Promotions</button>

            <button className='Login-button' onClick={Home}>Login</button>
            <div>
                <img src={cart} className='cart-image'/>
            </div>
            <div className='cart-number'>
               <center>2</center>
            </div>
        </div>
        
      
    </div>
  )
}

export default Header
