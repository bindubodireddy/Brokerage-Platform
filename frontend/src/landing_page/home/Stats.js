import React from 'react';

function Stats() {
    return ( 
        <div className="container p-3 mt-5 mb-5">
            <div className="row">
            <div className="col-6">
                <h1 >Trust with confidence </h1>
                <h5 className="mt-5">Customer-first always</h5>
                <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <h5>No spam or gimmicks</h5>
                <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h5>The Zerodha universe</h5>
                <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h5>Do better with money</h5>
                <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6 text-center">
                <img src="media/images/ecosystem.png" alt="stats" style={{width:"70%"}}></img>
                <div className="text-center">
                    <a href='' className="mx-5 "style={{textDecoration:"none"}}>Explore our products<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Try Kite demo<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Stats;