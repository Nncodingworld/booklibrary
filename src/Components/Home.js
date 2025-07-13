import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Categories from './Categories';
import TopTrending from './TopTrending';
import BestSellers from './BestSellers';
import NewArrivals from './NewArrivals';
import BookThemes from './BookThemes';
import BookStoryCarousel from './BookStoryCarousel';
import Footer from './Footer';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(Array.isArray(data) ? data : data.books || []);
      })
      .catch((err) => console.error('Failed to fetch books:', err));
  }, []);

  return (
    <div>
      <Banner />
      <Categories />
      <NewArrivals books={books} />
      <BestSellers books={books} />
       <TopTrending books={books} />
      <BookThemes/>
      <BookStoryCarousel/>
      <Footer/>
    </div>
  );
};

export default Home;
