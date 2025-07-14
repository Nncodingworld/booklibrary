import React from 'react';
import { useNavigate } from 'react-router-dom';
import fiction from '../assets/fiction.avif';
import Adventure from '../assets/adventure.avif';
import chidrensbook from '../assets/children.jpg';
import personal from '../assets/personell.jpg';
import poetry from '../assets/poetry.png';

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/books', { state: { category } }); 
  };

  return (
    <div className='container-fluid categories'>
      <div className='row'>
        <div className='heading text-center'>Search By Genre</div>
        <div className='categoty row justify-content-center' >
          <div className='categotyitem col col-md-4 col-lg-2' data-aos="fade-right" data-aos-duration="2500" data-aos-delay="400"
            onClick={() => handleCategoryClick('Fiction')}
            style={{ backgroundImage: `url(${fiction})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h4>Fiction</h4>
          </div>
          <div className='categotyitem col col-md-4 col-lg-2' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300"
            onClick={() => handleCategoryClick('Personal Development')}
            style={{ backgroundImage: `url(${personal})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h4>Personal Development</h4>
          </div>
          <div className='categotyitem col col-md-4 col-lg-2' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200"
            onClick={() => handleCategoryClick('Children Book')}
            style={{ backgroundImage: `url(${chidrensbook})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h4>Children’s Books</h4>
          </div>
             <div className='categotyitem col col-md-4 col-lg-2' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
            onClick={() => handleCategoryClick('Adventure')}
            style={{ backgroundImage: `url(${Adventure})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h4>Adventure</h4>
          </div>
          <div className='categotyitem col col-md-4 col-lg-2'
            onClick={() => handleCategoryClick('Poetry')}
            style={{ backgroundImage: `url(${poetry})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h4>Poetry</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
