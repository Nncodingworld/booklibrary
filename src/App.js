import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Bootstrap & Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Components
import Header from './Components/Header';
import Routing from './Components/Routing';
import { CartProvider } from './Components/CartContext';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <CartProvider>
      <div className='App'>
        <Header />
        <main>
          <Routing />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
