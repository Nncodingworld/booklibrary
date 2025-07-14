import React from 'react'
import { NavLink } from 'react-router-dom'
 import bannerimg1 from "../assets/nimg2.png"
import bannerimg2 from "../assets/nimg3.png"
import bannerimg3 from "../assets/books.jpg"
const Banner = () => {
  return (

<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bannerimg1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <h1>Mystery & Thriller</h1>
       <p></p>
          <NavLink to="/books" className="bannerbtn" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
      ShopNow
             </NavLink>
            
        </div>
    </div>
    <div className="carousel-item">
      <img src={bannerimg2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
           <h1>Personal Development</h1>
              <NavLink to="/books" className="bannerbtn">
      ShopNow
             </NavLink>
          </div>
    </div>
    <div className="carousel-item">
      <img src={bannerimg3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
           <h1>Contemporary Fiction</h1>
             <NavLink to="/books" className="bannerbtn">
      ShopNow
             </NavLink>
          </div>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

 
  )
}


export default Banner