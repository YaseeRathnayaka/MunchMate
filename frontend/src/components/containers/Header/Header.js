import React from 'react'
import { Navigate } from 'react-router';
import logo from '../../../assets/logo.png';
import cartlogo from '../../../assets/shopping-cart.png';
import "./Header.css"

const Home = () =>{
    Navigate('/home');
}
const Header = ({size}) => {
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
                <img src={cartlogo} className='cart-image-header'/>
            </div>
            <div className='cart-number'>
                <span>{size}</span>
            </div>
        </div>
        
      
    </div>
  )
}

export default Header
