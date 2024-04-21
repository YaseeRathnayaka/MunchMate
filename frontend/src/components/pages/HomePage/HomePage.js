import React from 'react'
import Header from '../../containers/Header/Header'
import slide3 from '../../../assets/slide3.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-container'>
      <div>
        <Header />
      </div>
        <div className='image-container'>
            <img src={slide3} className='slide-3' />
        <div className='overlap-button'>
            <button className='order-button'>Order Now</button>
        </div>
      </div>
    </div>

  )
}

export default HomePage
