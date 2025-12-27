import React from "react";
function Universe() {
  return (
    <div className="container text-center ">
      <div className="row m-5 p-5">
        <h1 className="fs-1">The Zerodha Universe</h1>
        <p className="py-2 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-2">
        <div className="col-4 px-5">
          <img
            src="media/images/ZerodhaFundhouse.png"
            style={{ width: "50%" }}
          ></img>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 px-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "50%" }}
          ></img>
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 px-5">
          <img src="media/images/tijori.svg" style={{ width: "50%" }}></img>
          <p className="">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="row mt-6 pt-4">
          <div className="col-4 px-5">
            <img
              src="media/images/streakLogo.png"
              style={{ width: "50%" }}
            ></img>
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding
            </p>
          </div>
          <div className="col-4 px-5">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "50%" }}
            ></img>
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 px-5">
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "50%" }}
            ></img>
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-4 p-2 mb-5" style={{width:"20%",margin : "0 auto"}} >sign up for free</button>
    </div>
  );
}

export default Universe;
