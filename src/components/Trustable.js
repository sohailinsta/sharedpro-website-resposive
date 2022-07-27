import React from 'react'
import "./Trustable.css";
function Trustable() {
  return (
    <div className="main-container">

    <div class="container-fluid">

      <div class="row">
        <div class="feature-box col-lg-4">
          <i class="icon fas fa-check-circle fa-4x"></i>
          <h3 class="feature-title">Easy to trust.</h3>
          <p className="easy-text">So easy to trust, founded by experienced developer.</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-bullseye fa-4x"></i>
          <h3 class="feature-title">Elite Client worlwide</h3>
          <p className="easy-text">We have client across the globe, we deal worlwide with our client.</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-heart fa-4x"></i>
          <h3 class="feature-title">Guaranteed reward.</h3>
          <p className="easy-text">We give reward to our employees on the quarterly bases.</p>
        </div>
      </div>


    </div>
  </div>
  )
}

export default Trustable