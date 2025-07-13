
import React from 'react';
import { useCart } from './CartContext';
import Footer from './Footer';

function Cart() {
  const { cart, increment, decrement, removeItem } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="container mt-4">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items d-flex flex-column gap-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="cart-item d-flex align-items-center p-3 shadow-sm rounded"
                  style={{ background: '#fff' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '80px', height: 'auto', borderRadius: '5px' }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1 text-muted" style={{ fontSize: '0.9rem' }}>
                      {item.price.toFixed(2)} each
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => decrement(item.id)}
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-end me-3" style={{ minWidth: '100px' }}>
                    <p className="mb-1 fw-bold">
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="addcart"
                      onClick={() => removeItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-end mt-4">
              <h5>Total: {total.toFixed(2)}</h5>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
