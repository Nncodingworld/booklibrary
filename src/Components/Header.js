import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext'; 

const Header = () => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-body-white">
      <div className="container-fluid px-5">
        <NavLink className="navbar-brand" to="/">
          Buk<span>Library</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 me-4 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/books">
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/wishlist">
                <i className="bi bi-heart"></i>
              </NavLink>
            </li>
            <li className="nav-item position-relative">
              <NavLink className="nav-link" aria-current="page" to="/cart">
                <i className="bi bi-bag-check-fill"></i>
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '1px',
                      background: '#564563ff',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '12px',
                      fontWeight: '700',
                      lineHeight: '1',
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auth">
                <i className="bi bi-person"></i>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 bright-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="searchbtn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
