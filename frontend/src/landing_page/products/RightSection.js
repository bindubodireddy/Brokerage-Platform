import React from 'react';
function RightSection({productName,productDescription,learnMore,imageURL}) {
    return ( 
        <div className='container mt-5'>
            <div className='row m-3'>
                <div className='col-6 mt-5'style={{padding:"5rem"}}>
                    <h2 className="p-3 mt-5">{productName}</h2>
                    <p className="p-3 fs-5 text-muted">{productDescription}</p>
                    <a className="p-3" href={learnMore} style={{textDecoration:"none"}}>learn more<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>      
                </div>             
                <div className='col-6 pb-5'>
                    <img src={imageURL} alt="productImage" style={{width:"100%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;