import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="footer-title mb-3">BookLibrary</h5>
            <p>
              BookLibrary is your one-stop destination for the latest and greatest in books. 
              Discover new worlds, learn new skills, and fuel your imagination with us.
            </p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="me-3 text-light">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="me-3 text-light">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="me-3 text-light">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-light">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <h6 className="footer-title mb-3">Navigate</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/books" className="footer-link">Books</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <h6 className="footer-title mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/cart" className="footer-link">Cart</a></li>
              <li><a href="/wishlist" className="footer-link">Wishlist</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h6 className="footer-title mb-3">Contact Us</h6>
            <address>
              123 Book Street<br/>
              Fiction City, BK 45678<br/>
              Email: <a href="/contactform" className="footer-link">support@booklibrary.com</a><br/>
              Phone: <a href="/contactform" className="footer-link">+1 (234) 567-890</a>
            </address>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center small text-light">
          &copy; {new Date().getFullYear()} Booklibrary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
