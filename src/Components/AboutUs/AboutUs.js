import React from 'react';
import './AboutUs.css';
import AboutSection from './AboutSection';
import Authors from './Authors';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Footer from '../Footer';


const AboutUs = () => {
  return (
    <div className="about-us-page">
      <AboutSection />
      <Authors />
      <Testimonials />
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default AboutUs;
