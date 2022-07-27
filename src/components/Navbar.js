import React from 'react'
import "./Navbar.css";
function Navbar() {
  return (
    <div className="main-header">
        <nav className="navbar navbar-expand-lg bg-light">
        <a className="navbar-brand arveam-size main-header" href="#"><img className="logo-set-header" src="/images/sharedpro_logo.png" alt="company-logo"/> Sharedpro Technology
         </a>
         
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse contact-text-align" id="navbarTogglerDemo01">
         <ul className="navbar-nav left-shift text-color product-space">
        <li className="nav-item price-space">
          <a className="nav-link main-header" aria-current="page" href="#footer">Contacts</a>
        </li>
        <li className="nav-item price-space">
          <a className="nav-link main-header" href="#Cards">Pricing</a>
        </li>
        <li className="nav-item price-space">
          <a className="nav-link btn btn-outline-dark main-header" href="#sign-in">Sign-in</a>
        </li>
        </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar