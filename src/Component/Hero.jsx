import React from "react";
import Products from "./Products";

import "./Hero.css";
import Footer from "./Footer";

function Hero() {
  return (
    <div className="main">
      <div className="product-content">
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
