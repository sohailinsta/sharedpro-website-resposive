import React from 'react'
import "./Detail.css";
function Detail() {
  return (
    <div className="main-detail-section">
        <div className="row">

        <div className="col-lg-6">
        <h1 className="arveam-title">
        Sharedpro is a talent mobility platform connecting companies to share full-time talent through its flexible employment model. It is backed by 100X.VC and CIIE, IIM Ahmedabad.  
        </h1>
        <div className="buttons-align">
        <button type="button" className="btn btn-dark btn-lg Register-button">Register</button>
          <button type="button" className="btn btn-outline-light btn-lg Apply-button">Apply</button>
          </div>
        </div>

        <div className="col-lg-6">
          <img className="ceo-img" src="/images/sujit-profile.jfif" alt="CEO"/>
          <h6 className="director-text">sujit singh (co-founder)</h6>
        </div>

        </div>
    </div>
  )
}

export default Detail