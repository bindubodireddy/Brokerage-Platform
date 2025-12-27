import React from 'react';

function Education() {
    return ( 
        <div className='container' style={{marginTop:"10rem"}}>
            <div className='row'>
                <div className='col'>
                    <img src="media/images/education.svg" alt="education" style={{width:"60%"}}></img>
                </div>
                    <div className='col'>
                    <h2 >Free and open market education</h2>
                    <p className='my-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className="ml-5"style={{textDecoration:"none"}}>Varsity<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>   
                    <p className='my-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>  
                    <a href='' className="ml-5 "style={{textDecoration:"none"}}>TradingQ&A<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;