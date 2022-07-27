import React from 'react'
import "./Carousel.css";
function Carousel() {
  return (
    // <div className="main-carousel-section">
    //     <h2>fvgtbyuntbgf uytbgrvryu uytbgrvtynu uynthbheynu uyntb</h2>
    //     <img className="img-set-carousel" src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg" alt="img-logo"/>
    //     <em>pebbales,hntbrgbtvfdg</em>
    // </div>
    <div className="main-carousel-section">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <h2 className="carousel-text-yeshu">Sujit Singh is currently the co-founder and CEO at Sharedpro - A Talent mobility marketplace connecting companies to share full-time employees.</h2>
      <img className="carousel-img-width" src="/images/sujit-profile.jfif"  alt="Director"/>
      <em>sujit singh (co-founder)</em>
    </div>
    <div class="carousel-item">
        <h2 className="carousel-text-yeshu">vikas Agrawal is leading the Operations at Sharedpro. vikas is helping companies avoid layoffs through its talent mobility platform.</h2>
      <img className="carousel-img-width" src="/images/vikas-profile.jfif"  alt="Technical Recruiter"/>
      <em>sujit singh (co-founder)</em>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carousel