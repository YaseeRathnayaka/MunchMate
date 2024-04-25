import React from 'react'
import '../Cards/Cards.css'


const Cards =({item}) => {
    const {image, name, description, price} = item;
  return (
    <div className='cards'>
      <div className='image-box'>
        <img src={image} className='image' alt='image' />
      <div className='details'><center>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button className='addtocart'>Add to cart</button>
      </center></div>
      </div>
    </div>
  )
}

export default Cards
