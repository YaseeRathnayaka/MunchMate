import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import cartlogo from '../../../assets/shopping-cart.png';
import "./Header.css";

const Header = ({ size }) => {
    const navigate = useNavigate();

    const NavigateToHome = () => {
        navigate('/home');
    }
    const NavigateToMenu = () => {
        navigate('/menu');
    }
    const NavigateToAbout = () => {
        navigate('/about');
    }
    const NavigateToPromotions = () => {
        navigate('/promotions');
    }

    const NavigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className='header'>
            <div>
                <img src={logo} className='header-logo' alt="Logo" />  
            </div>
            <div className='header-buttons'>
                <button className='Home-button' onClick={NavigateToHome}>Home</button>
                <button className='Home-button' onClick={NavigateToMenu}>Menu</button>
                <button className='Home-button' onClick={NavigateToAbout}>About</button>
                <button className='Home-button' onClick={NavigateToPromotions}>Promotions</button>

                <button className='Login-button' onClick={NavigateToLogin}>Login</button>
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
