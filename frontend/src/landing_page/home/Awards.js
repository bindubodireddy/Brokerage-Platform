import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5 p-5 mb-5">
            <div className="row">
                <div className="col">
                    <img src="media/images/largestBroker.svg" alt="Award"></img>              
                </div>
                <div className="col p-5">
                    <h1>Largest stock broker in india</h1>
                    <p className="mb-5">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <ul>
                       <div className="row">
                            <div className="col-6">
                                <li>Futures and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </div>
                            <div className="col-6">
                                <li>stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>bonds & Govt Securities</li>
                            </div>
                            <img src="/media/images/pressLogos.png" className="p-2 mb-5" alt="Logos"></img>
                       </div>
                        
                    </ul>

            </div>
        </div>
        </div>
     );
}

export default Awards;