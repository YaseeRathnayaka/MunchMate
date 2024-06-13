import React from 'react';
import '../Cart/Cart.css';
import Cartimg from '../../../assets/shopping-cart.png';

const Cart = ({ cart, updateQuantity, removeItem }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='cart'>
            <div className='cart-header'>
                <img src={Cartimg} className='cart-image' alt='cart' />
                <p className='cart-title'>Your Cart</p>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p>Your Cart looks a little empty.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <span>{item.name}</span>
                            <span>Rs. {item.price}</span>
                            <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                            />
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <div className='cart-footer'>
                <span>Total: Rs. {total}</span>
            </div>
        </div>
    );
};

export default Cart;
