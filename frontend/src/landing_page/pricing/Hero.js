import React from "react";
import PriceCard from "./PriceCard";
function Hero() {
  return (
    <div className="container text-center ">
      <div className="row m-5 p-5">
        <h1 className="fs-1">Charges</h1>
        <h3 className="py-2 fs-5 text-muted">List of all charges and taxes</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <PriceCard
            imageURL="media/images/pricingEquity.svg"
            title="Free equity delivery"
            description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
          />
        </div>
        <div className="col-4">
          <PriceCard
            imageURL="media/images/intradayTrades.svg"
            title="Intraday and F&O trades"
            description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />
        </div>
        <div className="col-4">
          <PriceCard
            imageURL="media/images/pricingEquity.svg"
            title="Free direct MF"
            description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
