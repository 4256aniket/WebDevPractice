import React from "react";
import "./product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>Linc Pentonic</p>
        <p className="product__price">
          <small>₹</small>
          <strong>100</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>
      <img src="./images/pentonic.png" alt="" />
      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
