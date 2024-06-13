// src/components/HomePage/HomePage.js
import React from 'react'
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import slide3 from '../../../assets/slide3.jpg'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-container'>
      <div>
        <Header />
      </div>
      <div className='image-container'>
        <img src={slide3} className='slide-3' alt='Slide 3' />
        <div className='overlap-button'>
          <button className='order-button'>Order Now</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
