import React from 'react';
import './MainsCards.css';

const MainsCards = ({ item, image, handleClick }) => {
    const { name, description, price } = item;

    return (
        <div className='cards'>
            <div className='image-box'>
                <img src={image} className='image' alt='Menu item' />
                <div className='details'>
                    <center>
                        <p className='name'>{name}</p><br></br>
                        <p className='description'>{description}</p>
                        <p className='price'>{price}</p>
                        <button className='addtocart' onClick={() => handleClick(item)}>Add to cart</button>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default MainsCards;
