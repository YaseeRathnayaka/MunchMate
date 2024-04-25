import React from 'react'
import '../Cart/Cart.css'
import Cartimg from '../../../assets/shopping-cart.png'
import Header from '../Header/Header'

const Cart = () => {
  return (
    <div className='cart-container'>
        <div className='cart'>
            <div className='cart-header'>
                <p className='cart-title'>Your Cart</p>
                <img src={Cartimg} className='cart-image' />
            </div>
        </div>
      
    </div>
  )
}

export default Cart
