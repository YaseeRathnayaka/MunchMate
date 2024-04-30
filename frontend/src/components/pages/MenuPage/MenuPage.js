// MenuPage.js
import React, { useState } from 'react';
import List from '../../../data/Data'; // Import the list of items
import Cards from '../Cards/Mains/MainsCards';
import Header from '../../containers/Header/Header';
import '../MenuPage/MenuPage.css';
import Cart from '../../containers/Cart/Cart';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState([]);
    const navigate = useNavigate();

    const handleClick = (item) => { 
        let isPresent = false;
        cart.forEach((product)=>{
            if(item.id === product.id)
                isPresent = true;
        })
        if(isPresent)
            return;
        setCart([...cart, item]);
    }

    const NavigateToMains = () => {
        navigate('/menu/mains');
    }
    const NavigateToBurgers = () => {
        navigate('/menu/burgers');
    }
    const NavigateToBeverages = () => {
        navigate('/menu/beverages');
    }
    const NavigateToBiriyani = () => {
        navigate('/menu/biriyani');
    }
    const NavigateToDesserts = () => {
        navigate('/menu/desserts');
    }
    const NavigateToWraps = () => {
        navigate('/menu/wraps');
    }
    return (
        <div className='menu-container'>
            <Header size={cart.length} />
            <div className='menu-buttons'>
                <button className='menu-button' onClick={NavigateToMains}>Mains</button>
                <button className='menu-button' onClick={NavigateToBurgers}>Burgers</button>
                <button className='menu-button' onClick={NavigateToWraps}>Wraps</button>
                <button className='menu-button' onClick={NavigateToBiriyani}>Biriyani</button>
                <button className='menu-button' onClick={NavigateToBeverages}>Beverages</button>
                <button className='menu-button' onClick={NavigateToDesserts}>Desserts</button>
            </div>
            <div className='content-container'>
                <div className='card-map'>
                    {List.map((item) => (
                        <Cards item={item} handleClick={handleClick} key={item.id} />
                    ))}
                </div>
                <div className='cart-container'>
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default MenuPage;




