import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          <img          
          src="media/images/logo.svg"
          style={{ width: "17%",marginLeft:'10rem' }}
        ></img>
        </Link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link mx-3" aria-current="page" to="/Signup">
                Signup
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/Support">
                Support
              </Link>
            </li>
          </ul>          
        </div>
      </div>
      <button
          class="navbar-toggler d-block"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"               
        >
          <span class="navbar-toggler-icon"></span>
        </button>      
    </nav>
  );
}

export default Navbar;
