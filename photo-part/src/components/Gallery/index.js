import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery () {
    const currentCategory = {
        name: "commercial",
        description: "Photos of gravy storeys food trucks and other commercial plaves"
    };
    return (
        <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{capitalizeFirstLetter(currentCategory.description)}</p>
        <div>
            <img
                src={photo}
                alt="Commercial example"
                className='img-thumbnail mx-1'
            />
        </div>
        </section>
    );
}

export default Gallery;