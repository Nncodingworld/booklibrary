import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUs from'./AboutUs/AboutUs'
import Books from './Books'
import BookDetail from './BookDetail'
import Cart from './Cart'
import Header from './Header'
import Wishlist from './Wishlist'
import TopTrending from './TopTrending'
import BestSellers from './BestSellers'
      import AuthForm from './AuthForm';
import BlogPage from './BlogPage';
import ContactForm from './AboutUs/ContactForm'
const Routing = () => {
  return (
  <Routes>
    <Route path="/" Component={Home}/>
      <Route path="/header" Component={Header}/>
      <Route path="/about" Component={AboutUs}/>
    <Route path="/books" Component={Books}/>
    <Route path="/books/:id" Component={BookDetail} />
        <Route path="/cart" Component={Cart} />
          <Route path="/toptrending" Component={TopTrending} />
         <Route path="/wishlist" Component={Wishlist} />
          <Route path="/bestsellers" Component={BestSellers} />
     <Route path="/auth" Component={AuthForm} /> 
     <Route path="/contactform" Component={ContactForm} />
<Route path="/blog" Component={BlogPage} />

  </Routes>
  )
}

export default Routing