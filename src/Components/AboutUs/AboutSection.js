import React from 'react';
import './AboutUs.css';
import aboutus from '../../assets/aboutus.jpg'; // Your background image

const AboutSection = () => {
  return (
    <section
      className="about-section-bg"
      style={{ backgroundImage: `url(${aboutus})` }}
    >
      <div className="overlay">
        <div className="about-text animated-slide">
          <h2>Know Us</h2>
   <p>Welcome to   <span className="highlight">BookLibrary</span>  ,
a cozy haven for book lovers of all ages.
We believe in the magic of storytelling and the power of books to inspire, educate, and connect.
Our shelves are filled with carefully curated titles — from timeless classics to new releases.
Whether you're a passionate reader or just beginning your literary journey, there's something here for you.
We also host author events, book clubs, and community meetups to bring stories to life.
Come explore, discover, and get lost in the world of books with us.</p>
        </div>
      </div>
    </section>
  );
  
};


export default AboutSection;
