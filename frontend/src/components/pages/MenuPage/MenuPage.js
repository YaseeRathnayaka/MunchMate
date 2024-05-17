import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Header from '../../containers/Header/Header';
import '../MenuPage/MenuPage.css';
import Cart from '../../containers/Cart/Cart';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MenuPage = () => {
    const [cart, setCart] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getMains');
                setMenuItems(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMenuItems();
    }, []);

    const handleClick = (item) => { 
        let isPresent = cart.some(product => product.id === item.id);
        if (!isPresent)
            setCart([...cart, item]);
    }

    const navigateToCategory = (category) => {
        navigate(`/menu/${category}`);
    }

    return (
        <div className='menu-container'>
            <Header size={cart.length} />
            <div className='menu-buttons'>
                <button className='menu-button' onClick={() => navigateToCategory('mains')}>Mains</button>
                <button className='menu-button' onClick={() => navigateToCategory('burgers')}>Burgers</button>
                <button className='menu-button' onClick={() => navigateToCategory('wraps')}>Wraps</button>
                <button className='menu-button' onClick={() => navigateToCategory('biriyani')}>Biriyani</button>
                <button className='menu-button' onClick={() => navigateToCategory('beverages')}>Beverages</button>
                <button className='menu-button' onClick={() => navigateToCategory('desserts')}>Desserts</button>
            </div>
            <div className='content-container'>
                <div className='card-map'>
                    {menuItems.map((item) => (
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
