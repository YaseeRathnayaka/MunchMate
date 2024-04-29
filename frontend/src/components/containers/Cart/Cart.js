import React from 'react'
import '../Cart/Cart.css'
import Cartimg from '../../../assets/shopping-cart.png'


const Cart = () => {
  return (
    <div className='cart-container'>
        <div className='cart'>
            <div className='cart-header'>
                
                <img src={Cartimg} className='cart-image' />
                <p className='cart-title'>Your Cart</p>
            </div>
            <div className='cart-content'>

            </div>
            <div className='cart-footer'>

            </div>
        </div>
      
    </div>
  )
}

export default Cart
