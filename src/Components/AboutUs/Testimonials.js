import React from 'react';
import Slider from 'react-slick';
import './AboutUs.css';

const testimonials = [
  {
    name: 'Anna Thompson',
    comment:
      'This bookstore is my sanctuary! The staff always recommend the best reads, and the cozy atmosphere makes it perfect for hours of browsing.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'James Parker',
    comment:
      'I love the diverse collection of books here. Whether it’s fiction or non-fiction, I always find something new and exciting to dive into.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Sophia Martinez',
    comment:
      'The author events and book signings make this place extra special. It’s wonderful to connect with fellow book lovers in such a welcoming space.',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    name: 'Ethan Lee',
    comment:
      'From rare editions to bestsellers, this store has it all. The knowledgeable staff truly make every visit a delightful experience.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section"  data-aos="fade-up" data-aos-duration="900" data-aos-delay="50"   data-aos-easing="ease-in-out">
      <h2>Our Happy Souls</h2>
      <p className="testpara">
        Our readers love sharing their experiences with us.
        From heartfelt stories to rave reviews, their words inspire us every day.
        See why our bookstore is a beloved community hub for book lovers everywhere.
      </p>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image-wrapper">
              <img src={item.image} alt={item.name} className="testimonial-image" />
            </div>
            <p className="testimonial-comment">"{item.comment}"</p>
            <h4 className="testimonial-name">- {item.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
