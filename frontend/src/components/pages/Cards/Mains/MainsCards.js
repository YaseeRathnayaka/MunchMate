// MainsCards.js
import React from 'react';
import '../Mains/MainsCards.css';

const Mains = ({ item, handleClick }) => {
    const { image, name, description, price } = item; // Ensure all properties are available

    return (
        <div className='cards'>
            <div className='image-box'>
                <img src={image} className='image' alt='image' />
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

export default Mains;
