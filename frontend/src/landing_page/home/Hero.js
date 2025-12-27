import React from 'react';

function Hero() {
    return (
        <div className='container text-center'>
          <div className='row'>
            <div className='col'>
              <img src='media/images/homeHero.png' alt="hero section" className="mb-5 align-self-center"style={{width:"60%"}}></img>
              <h1 className="pt-5" >Invest in everything</h1>
              <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
              <button className="btn btn-primary mt-4 p-2 mb-5" style={{width:"20%",margin : "0 auto"}} >sign up for free</button>
            </div>
          </div>           
        </div>
      );
}

export default Hero;