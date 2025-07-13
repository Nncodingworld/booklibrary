import React from 'react';
import { NavLink } from 'react-router-dom';
import studyImage from '../assets/study2.avif';
import MotivationImage from '../assets/study5.avif';
const BookThemes = () => {
  return (
    <div className="container-fluid book-themes-section py-5">
      <div className="row g-4">
<div className="col-12 col-md-6">
          <div className="theme-card"   style={{ backgroundImage: `url(${studyImage})` }}>
            <div className="overlay">
                 <NavLink to="/books" style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}>
     <h2 className="theme-title">Books for Beginners</h2>
             </NavLink>
            
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="theme-card" style={{ backgroundImage: `url('${MotivationImage}')` }}>
            <div className="overlay">
             <NavLink
  to="/books"
  className="theme-title"
  style={{ textDecoration: 'none', color: 'white', display: 'inline-block' }}
>
  Books for Motivation
</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookThemes;
