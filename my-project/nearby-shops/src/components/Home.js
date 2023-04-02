import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./images/banner2.webp" alt="" />
      </div>

      <div className="home__row">
        <Product />
        {/* Shop2 */}
      </div>

      <div className="home__row">
        {/* Shop1 */}
        {/* Shop2 */}
        {/* shop3 */}
      </div>

      <div className="home__row">{/* Shop1 */}</div>
    </div>
  );
}

export default Home;
