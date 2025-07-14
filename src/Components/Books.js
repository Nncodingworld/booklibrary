import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import Footer from './Footer';

const categories = [
  'All',
  'Fiction',
  'Adventure',
  'Children Book',
  'Personal Development',
  'Poetry',
];

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const { state } = useLocation(); 
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/database.json`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);

        if (state?.category) {
          setActiveCategory(state.category);
          setFilteredBooks(data.books.filter((book) => book.category === state.category));
        } else {
          setFilteredBooks(data.books);
        }
      })
      .catch((err) => console.error('Failed to fetch books:', err));
  }, [state]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((book) => book.category === activeCategory));
    }
  }, [activeCategory, books]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleBookClick = (id) => {
    navigate(`/books/${id}`);
  };

  const handleAddToCart = (book, e) => {
    e.stopPropagation();
    addToCart(book);
  };

  return (
    <>
      <div className="container my-4" >
        <h2 className="text-center mb-4" style={{ fontFamily: 'Old Standard TT', color: 'rgb(66, 57, 14)' }}>
          Book Store
        </h2>

        <div className="category-section" >
          <div className="categorysec" role="group" aria-label="Book categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`mx-1 ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4 mt-3">
          {filteredBooks.length === 0 ? (
            <p className="text-center">No books found for "{activeCategory}" category.</p>
          ) : (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                onClick={() => handleBookClick(book.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-truncate">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <p className="fw-bold mb-0">⭐ {book.rating}</p>
                      <button className="addcart btn-sm" onClick={(e) => handleAddToCart(book, e)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Books;
