import React from 'react'
import '../Cards/Cards.css'
import img from '../../../assets/chicken bucket.jpg'

const Cards =({item}) => {
    const {name, age} = item;
  return (
    <div className='cards'>
      <div className='image-box'>
        <img src={img} alt='image' />
      <div className='deatils'>
        <p>{name}</p>
        <p>{age}</p>
        <button>Add to cart</button>
      </div>
      </div>
    </div>
  )
}

export default Cards
