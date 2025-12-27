import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">People</h1>
        <div className="col p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Founder image"
            style={{ width: "20rem", height: "20rem", borderRadius: "100%" }}
          ></img>
          <p className="text-center mt-3 fs-3">Nithin Kamath</p>
          <p className="text-center">Founder, CEO</p>
        </div>
        <div className="col p-5">
          <p className="m-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="m-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="m-4">Playing basketball is his zen.</p>
          <p className="m-4">Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
