import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error('Failed to fetch book:', err));
  }, [id]);

  if (!book) return <div className="text-center mt-5">Loading book details...</div>;

  const handleAddToCart = () => {
    addToCart(book);  
    navigate('/cart');
  };

  return (
    <div className="container my-5">
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
            <button
              className="btn btn-primary"
              onClick={handleAddToCart} 
            >
              Add to Cart
            </button>
            <button
              className="wishlistbtn"
              onClick={() => navigate('/wishlist')}
            >
            ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
