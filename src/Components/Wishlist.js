import React from 'react'
import Footer from './Footer'
const Wishlist = () => {
  return (
<>
<div
  className="d-flex justify-content-center align-items-center"
  style={{
    fontFamily: "'Berkshire Swash', serif",
    color: "black",
    fontSize: "30px",
    height: "400px",
    flexDirection: "column",
    textAlign: "center"
  }}
>
  <div>Your Wishlist Is Empty</div>
  <div>Hurry UP! Make it full</div>
</div>

<Footer/>
</>

  )
}

export default Wishlist