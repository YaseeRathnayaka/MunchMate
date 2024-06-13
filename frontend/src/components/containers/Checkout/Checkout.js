import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cart, handleCheckout }) => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        paymentInfo: ''
    });

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheckout(userDetails);
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='checkout-container'>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={userDetails.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    value={userDetails.address} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="paymentInfo" 
                    placeholder="Payment Information" 
                    value={userDetails.paymentInfo} 
                    onChange={handleChange} 
                    required 
                />
                <div className='order-summary'>
                    <h3>Order Summary</h3>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>{item.price * item.quantity}</span>
                        </div>
                    ))}
                    <div>
                        <strong>Total: {total}</strong>
                    </div>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
