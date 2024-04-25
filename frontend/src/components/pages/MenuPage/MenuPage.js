import React from 'react'
import list from '../../../data/Data'
import Cards from '../Cards/Cards'
import Header from '../../containers/Header/Header'
import '../MenuPage/MenuPage.css'
import Cart from '../../containers/Cart/Cart'

const MenuPage = () => {
  return (
    <div className='menu-container'>
        <Header />
    <div className='menu-buttons'>
    <button className='menu-button' > Mains</button>
    <button className='menu-button' >Burgers</button>
    <button className='menu-button' >Wraps</button>
    <button className='menu-button' >Biriyani</button>
    <button className='menu-button' >Beverages</button>
    <button className='menu-button' >Desserts</button>
    
    </div>
    <div className='cart-card'>
    <div className='card-map'>
        {list.map((item) => (
        <Cards item={item} />
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
