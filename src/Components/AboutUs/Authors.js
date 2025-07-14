import React from 'react';
import Slider from 'react-slick';
import './AboutUs.css';
import author1 from '../../assets/author1.jpeg'; // Replace these
import author2 from '../../assets/author2.jpeg';
import author3 from '../../assets/author3.jpeg';
import author4 from '../../assets/author4.png';

const authors = [
  { name: 'Jane Austen', image: author1 },
  { name: 'George Orwell', image: author2 },
  { name: 'Toni Morrison', image: author3 },
  { name: 'Haruki Murakami', image: author4 },
];

const Authors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="authors-section" data-aos="fade-up" data-aos-duration="900" data-aos-delay="50"   data-aos-easing="ease-in-out">
      <h2>Featured Authors</h2>
      <p className='authors-text'>Our featured authors bring stories to life with passion, imagination, and deep insight.
From bestselling novelists to emerging voices, each one offers a unique perspective.
They craft characters you remember and worlds you’ll never want to leave.
We celebrate their creativity, dedication, and the magic they share through words.
Get to know the authors shaping today’s literary landscape.</p>
      <Slider {...settings}>
        {authors.map((author, index) => (
          <div key={index} className="author-card">
            <img src={author.image} alt={author.name} />
            <p>{author.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Authors;
