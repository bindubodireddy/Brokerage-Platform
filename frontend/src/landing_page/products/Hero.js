import React from 'react';
function Hero() {
    return (
        <div className='container text-center '>
            <div className='row m-5 p-5'>
                <h1 className='fs-1'>Zerodha Products</h1>
                <p className='py-2 fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a></p>                                   
            </div>
            <hr/>
        </div>
      );
}

export default Hero;