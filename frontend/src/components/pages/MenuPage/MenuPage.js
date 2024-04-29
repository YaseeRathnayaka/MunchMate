import React, { useState } from 'react';
import list from '../../../data/Data';
import Cards from '../Cards/Cards';
import Header from '../../containers/Header/Header';
import '../MenuPage/MenuPage.css';
import Cart from '../../containers/Cart/Cart';

const MenuPage = () => {
    const [cart, setCart] = useState([]);
    const [warining, setWarining] = useState([]);

    const handleClick = (item) =>{ 
        let isPresent = false;
        cart.forEach((product)=>{
                if(item.id === product.id)
                isPresent = true;
        })
        if(isPresent)
         return;
        setCart([...cart, item]);
    }

    return (
        <div className='menu-container'>
            <Header size={cart.length} /> {/* Pass the cart size to Header */}
            <div className='menu-buttons'>
                <button className='menu-button' >Mains</button>
                <button className='menu-button' >Burgers</button>
                <button className='menu-button' >Wraps</button>
                <button className='menu-button' >Biriyani</button>
                <button className='menu-button' >Beverages</button>
                <button className='menu-button' >Desserts</button>
    
    </div>
    <div className='cart-card'>
    <div className='card-map'>
        {list.map((item) => (
        <Cards item={item} handleClick={handleClick} key={item.id} />
    ))}
    <div>
        <Cart />
    </div>
        </div> 
    </div>
   

    </div>
  )
}

export default MenuPage
