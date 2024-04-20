import React from 'react'
import Header from '../../containers/Header/Header'
import slide3 from '../../../assets/slide3.jpg'

const HomePage = () => {
  return (
    <div className='home-container'>
      <Header /> 
        <div>
            <img src={slide3} className='slide-3' />
        </div>
    </div>
  )
}

export default HomePage
