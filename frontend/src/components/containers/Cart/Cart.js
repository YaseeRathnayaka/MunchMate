import React from 'react';
import '../Cart/Cart.css';
import Cartimg from '../../../assets/shopping-cart.png';

const Cart = ({ cart }) => {
    // Calculate total
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-header'>
                    <img src={Cartimg} className='cart-image' alt='cart' />
                    <p className='cart-title'>Your Cart</p>
                </div>
                <div className='cart-content'>
                    {cart.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                    ))}
                </div>
                <div className='cart-footer'>
                    <span>Total: {total}</span>
                </div>
            </div>
        </div>
    );
};

export default Cart;
