import React from "react";
import bgCart from "../assets/images/bgcart.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img src={bgCart} className="card-img" alt="..." height="900px" />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 ">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
