import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row m-3'>
                <div className='col-5 p-3'>
                    <img src={imageURL} alt="productImage"></img>
                </div>
                <div className='col-2'></div>
                <div className='col-5 p-3'>
                    <h2 className="p-3 mt-5">{productName}</h2>
                    <p className="p-3 fs-5 text-muted">{productDescription}</p>
                    <a className="p-3" href={tryDemo} style={{textDecoration:"none"}}>Try demo<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    <a  className="p-3"href={learnMore} style={{textDecoration:"none"}}>Learn more<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a><br/>                    
                    <img className="p-3"src={googlePlay} alt="googlePlay"></img>
                    <img className="p-3"src={appStore} alt="appStore"></img>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;