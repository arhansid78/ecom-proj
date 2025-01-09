import React from "react";
import shop1 from "../images/shop1.jpg";
import { NavLink } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero-grid">
          <div className=" text-section">
            <p className="welcome-p">welcome to</p>
            <h1 className="shop-heading">Arhanify</h1>
            <p className="text-p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eum, explicabo.
            </p>
            <button className="hero-btn">
              <NavLink to="/products">shop now</NavLink>
            </button>
          </div>
          <div className="image-section">
            <img src={shop1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
