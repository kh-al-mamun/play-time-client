import React, { useEffect, useState } from 'react';
import './ItemDetails.css'
import { CurrencyDollarIcon, ShopIcon, StarFillIcon, StarHalfFill } from '../../utilitis/icons';

const ItemDetails = () => {
    const [itemDetails, setItemDetails] = useState({})

    useEffect(() => {
        fetch(`https://play-time-kh.onrender.com/animal-toys?id=64651a352de078f766aa542e`)
            .then(response => response.json())
            .then(data => setItemDetails(data))
    }, [])

    const { _id, toyName, sellerName, sellerEmail, picture, price, rating, category, availableQuantity, description, tags } = itemDetails


    return (
        <div className='itemDetails-container'>
            <div className='image-div'>
                <img src={picture} alt="" />
            </div>

            <div>

                <h2 className='item-name'>
                    {toyName}
                </h2>

                <p className='description'>
                    {description}
                </p>

                <h2 className='item-color'>
                    Select Color
                </h2>

                <img
                    className='color-img' src={picture} alt=""
                />

                <p>
                    <span style={{ display: 'inline-block' }}><ShopIcon /></span>&nbsp; {sellerName}

                </p>

                <p>
                    <span style={{ display: 'inline-block' }}><CurrencyDollarIcon /></span>
                    &nbsp; Price: {price}
                </p>

                <p>
                    <span style={{ display: 'inline-flex' }}>
                        <StarFillIcon />
                        <StarFillIcon />
                        <StarFillIcon />
                        <StarFillIcon />
                        <StarHalfFill />
                        </span>
                    &nbsp; {rating}
                </p>

                <p>
                    Quantity: {availableQuantity}
                </p>

                <button>BYE NOW</button>

            </div>
        </div>
    );
};

export default ItemDetails;