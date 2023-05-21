import React, { useEffect, useState } from 'react';
import './Gallery.css'
import ItemDetails from '../ItemDetails/ItemDetails';

const Gallery = () => {
    const [imageData, setImageData] = useState([]);
    useEffect(() => {
        fetch("https://play-time-kh.onrender.com/animal-toys/gallery")
            .then(response => response.json())
            .then(data => setImageData(data))
    }, [])

    const handleItemsDetails = (id) => {
        console.log(id)
    }

    return (
            <div className='gallery'>
                {
                    imageData.map(image => {

                        return (
                            <>
                                <div
                                    key={image._id}
                                    className='pics'
                                    onClick={() => handleItemsDetails(image._id)}>
                                    <img src={image.picture} style={{ width: '100%' }}></img>
                                </div>

                                {/* <div style={{position:'fixed', top: '0'}}>
                                    <ItemDetails
                                    ></ItemDetails>
                                </div> */}
                            </>


                        )
                    })
                }
            </div>

    );
};

export default Gallery;