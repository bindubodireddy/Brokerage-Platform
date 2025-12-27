import React from "react";
function Hero() {
  return (
    <div className="container-fluid bg-primary text-white p-3">
      <div className="row p-5 " style={{margin:"0 7rem 0"}}>
        <div className="d-flex justify-content-between px-5">
          <h4>Support Portal</h4>
          <a href="#" className="text-white">Track tickets</a>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{marginLeft:"13rem" }}>
          <h5>Search for an answer or browse help topics to create a ticket</h5>
          <input
            type="text"
            placeholder="EG:how to i activate F&O"
            className="my-4 p-3"
            style={{ width: "100%" }}
          />
          <br />
          <a href="#" className="text-white pe-5">Track account opening</a>
          <a href="#" className="text-white pe-5">Track segment activation </a>
          <a href="#" className="text-white pe-5">Intraday margins </a>
          <a href="#" className="text-white pe-4">Kite user manual</a>
        </div>
        <div className="col" style={{marginLeft:"3rem"}} >
          <h3>Featured</h3>
          <ol>
            <li><a href="#" className="text-white">Latest Intraday leverages and Square-off timings</a></li>
            <li><a href="#" className="text-white">Offer for sale (OFS) - May 2025</a></li>
          </ol>
        </div>             
      </div>
    </div>
  );
}

export default Hero;
