import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Components/CartContext';
import './TrendingCommon.css';

const NewArrivals = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/database.json`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data.books && Array.isArray(data.books)) {
          setBooks(data.books);
        } else {
          setBooks([]);
          console.error('Invalid data format: "books" array missing');
        }
      })
      .catch(error => {
        console.error('Failed to fetch books:', error);
        setBooks([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const newArrivalBooks = [...books]
    .sort((a, b) => b.id - a.id)
    .slice(0, 12);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - itemsPerPage);
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < newArrivalBooks.length)
      setCurrentIndex(currentIndex + itemsPerPage);
  };

  const visibleBooks = newArrivalBooks.slice(currentIndex, currentIndex + itemsPerPage);

  const handleAddToCart = (book, e) => {
    e.stopPropagation();
    addToCart(book);
  };

  if (loading) {
    return <div className="container my-5">Loading...</div>;
  }

  if (!books.length) {
    return <div className="container my-5">No books available.</div>;
  }

  return (
    <section className="container trending-section my-5">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <h2 className="trending-title mb-0">New Arrivals</h2>
        <div>
          <button className="trendingbutton me-2" onClick={handlePrev} disabled={currentIndex === 0}>
            &#8592;
          </button>
          <button
            className="trendingbutton"
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= newArrivalBooks.length}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="row g-4"  data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"   data-aos-easing="ease-in-out" >
        {visibleBooks.map((book) => (
          <div key={book.id} className="col-12 col-sm-6 col-md-3">
            <div
              className="card h-100 shadow-sm trending-card"
              onClick={() => navigate(`/books/${book.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-truncate">{book.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fw-bold">⭐ {book.rating}</span>
                  <button
                    className="addcart"
                    onClick={(e) => handleAddToCart(book, e)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
