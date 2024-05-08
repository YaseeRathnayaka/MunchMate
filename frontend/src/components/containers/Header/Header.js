import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import cartlogo from '../../../assets/shopping-cart.png';
import "./Header.css";

const Header = ({ size }) => {
    const navigate = useNavigate();

    const NavigateTo = (path) => {
        navigate(path);
    }

    return (
        <div className='header'>
            <div>
                <img src={logo} className='header-logo' alt="Logo" />  
            </div>
            <div className='header-buttons'>
                <button className='Home-button' onClick={() => NavigateTo('/home')}>Home</button>
                <button className='Home-button' onClick={() => NavigateTo('/menu')}>Menu</button>
                <button className='Home-button' onClick={() => NavigateTo('/about')}>About</button>
                <button className='Home-button' onClick={() => NavigateTo('/promotions')}>Promotions</button>

                <button className='Login-button' onClick={() => NavigateTo('/login')}>Login</button>
                <div>
                    <img src={cartlogo} className='cart-image-header' alt="Cart" />
                </div>
                <div className='cart-number'>
                    <span>{size}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
