import React from "react";
import "./product.css";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>the lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91HHwbbjGOL._SL1500_.jpg"
          alt=""
        />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
