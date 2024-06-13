import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import Header from '../../containers/Header/Header';
import '../MenuPage/MenuPage.css';
import Cart from '../../containers/Cart/Cart';
import List from '../../../data/MainsData';

const MenuPage = () => {
    const [cart, setCart] = useState([]);
    const [menuItems, setMenuItems] = useState(List);

    const handleClick = (item) => {
        const itemInCart = cart.find(product => product.id === item.id);
        if (itemInCart) {
            setCart(cart.map(product => product.id === item.id
                ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
                : product
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => item.id === id
            ? { ...item, quantity: Number(quantity) }
            : item
        ));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div className='menu-container'>
            <Header size={cart.length} />
            <div className='menu-buttons'>
                <button className='menu-button'>Hot n Crispy Chicken</button>
                <button className='menu-button'>Burgers</button>
                <button className='menu-button'>Snacks & Bites</button>
                <button className='menu-button'>Wraps & Submarine</button>
                <button className='menu-button'>Hot Drumlets</button>
                <button className='menu-button'>KFC Biriyani</button>
                <button className='menu-button'>Sides</button>
            </div>
            <div className='content-container'>
                <div className='card-map'>
                    {menuItems.map((item) => (
                        <Cards item={item} handleClick={handleClick} key={item.id} />
                    ))}
                </div>
                <div className='cart-container'>
                    <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
