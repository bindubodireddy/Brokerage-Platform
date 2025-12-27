import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="pt-5">Open a Zerodha account</h1>
        <p className="my-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary mt-4 p-2 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
