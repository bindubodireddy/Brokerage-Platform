import React from 'react';
function PriceCard({imageURL,title,description}) {
    return (  
        <div className='container my-5 p-3'>
            <div>
                <img src={imageURL}></img>
                <h3 className='my-2'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PriceCard;