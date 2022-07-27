import React from 'react'
import "./Cards.css";
function Cards() {
  return (
    <div>
<div>
<h2 class="plan-text">Buy Report or membership</h2>
<p class="plan-text-two">Simple and affordable price plans for yous.</p>
</div>
<div id="Cards">
<div class="row cards-center">

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Single Company</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">₹ 799</h2>
        <p>Avail Single Company Report</p>
        <p>Access for 1 week only</p>
        <p>Best for one time user</p>
        <button class="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
      </div>
    </div>
  </div>

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header bg-primary">
        <h3>Starter Plan</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">₹ 4,999</h2>
        <p>Avail 10 Company Reports</p>
        <p>Access till Membership is Activate</p>
        <p>Best for Individual</p>
        <button class="btn btn-lg btn-block btn-primary" type="button">Sign Up</button>
      </div>
    </div>
  </div>

  <div class="pricing-column col-lg-4">
    <div class="card">
      <div class="card-header bg-primary">
        <h3>Pro</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">₹ 30,000</h2>
        <p>Avail 100 Company Reports</p>
        <p>Access for one year</p>
        <p>Best for Individual and small team</p>
        <button class="btn btn-lg btn-block btn-primary" type="button">Sign Up</button>

      </div>
    </div>
  </div>

</div>
</div>
    </div>
  )
}

export default Cards