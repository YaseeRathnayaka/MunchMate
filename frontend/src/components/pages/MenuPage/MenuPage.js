import React from 'react'
import list from '../../../data/Data'
import Cards from '../Cards/Cards'
import Header from '../../containers/Header/Header'
import '../MenuPage/MenuPage.css'

const MenuPage = () => {
  return (
    <div className='menu-container'>
        <Header />
    <div className='card-map'>
        {list.map((item) => (
        <Cards item={item} />
    ))}
         
    </div>
    </div>
  )
}

export default MenuPage
