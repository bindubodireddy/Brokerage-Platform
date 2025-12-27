import React from 'react';

function Pricing() {
    return ( 
       <div className='container mt-5 mb-5'>
        <div className='row'>
            <h2 className='mb-4'>Unbeatable pricing</h2>
            <div className='col-4'>                
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' className="ml-5 "style={{textDecoration:"none"}}>See Pricing<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>                 
            </div>
            <div className='col '>
                <div className='d-flex px-4'>
                    <img src="media/images/pricingEquity.svg" alt="price" style={{width:90}}></img>
                    <p className='align-self-end' style={{fontSize:"0.75rem"}}>Free account opening</p>                    
                </div>               
            </div>
            <div className='col'>
                <div className='d-flex px-4'>
                    <img src="media/images/pricingEquity.svg" alt="price" style={{width:90}}></img>
                    <p className='align-self-end' style={{fontSize:"0.75rem"}}>Free equity delivery and direct mutual funds</p>
                </div>
            </div>
            <div className='col'>
                <div className='d-flex px-4'>
                    <img src="media/images/intradayTrades.svg" alt="price"style={{width:90}}></img>
                    <p className='align-self-end' style={{fontSize:"0.75rem"}}>Intraday and F&O</p> 
                </div>                               
            </div>
        </div>
       </div>
     );
}

export default Pricing;