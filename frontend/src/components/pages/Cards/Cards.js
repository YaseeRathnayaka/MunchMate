import React from 'react'
import '../Cards/Cards.css'


const Cards =({item}) => {
    const {image, name, description, price} = item;
  return (
    <div className='cards'>
      <div className='image-box'>
        <img src={image} className='image' alt='image' />
      <div className='details'><center>
        <p className='name'>{name}</p><br></br>
        <p className='description'>{description}</p>
        <p className='price'>{price}</p>
        <button className='addtocart'>Add to cart</button>
      </center></div>
      </div>
    </div>
  )
}

export default Cards
