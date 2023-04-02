import React from "react";

function Product() {
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
          <p>⭐️</p>
          <p>⭐️</p>
        </div>
        <img src="./images/pentonic.png" alt="" />
      </div>
    </div>
  );
}

export default Product;
