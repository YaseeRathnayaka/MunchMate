import React from 'react';
import './Cards.css';

const Cards = ({ item, handleClick }) => {
    const { name, description, price, image} = item;

    return (
        <div className='cards'>
            <div className='image-box'>
                <img src={image} className='image' alt='Menu item' />
            </div>
            <div className='details'>
                <p className='name'>{name}</p>
                <p className='description'>{description}</p>
                <p className='price'>Rs. {price}</p>
                <button className='addtocart' onClick={() => handleClick(item)}>Add to cart</button>
            </div>
        </div>
    );
}

export default Cards;
