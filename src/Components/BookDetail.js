import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.PUBLIC_URL}/database.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books data');
        return res.json();
      })
      .then((data) => {
        const foundBook = data.books.find((b) => b.id === parseInt(id, 10));
        if (!foundBook) {
          setError('Book not found');
          setBook(null);
        } else {
          setBook(foundBook);
          setError(null);
        }
      })
      .catch((err) => {
        setError(err.message || 'An error occurred');
        setBook(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading book details...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  if (!book) return <div className="text-center mt-5">Book not found.</div>;

  const handleAddToCart = () => {
    addToCart(book);
    navigate('/cart');
  };

  return (
    <div className="container"  style={{ marginTop: '120px', minHeight: '100vh' }}>
      <div className="row g-4">
        <div className="col-md-5">
          <img
            src={book.image}
            alt={book.title}
            className="img-fluid rounded shadow"
            style={{ width: '80%', height: 'auto' }}
          />
        </div>
        <div className="col-md-7">
          <h2>{book.title}</h2>
          <p className="text-muted">by {book.author}</p>
          <p className="lead">{book.description}</p>
          <h4 className="text-success mb-3">Price: ${book.price}</h4>
          <p className="fw-bold mb-2">Rating: ⭐ {book.rating}</p>
          <div className="d-flex gap-3">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="wishlistbtn" onClick={() => navigate('/wishlist')}>
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
