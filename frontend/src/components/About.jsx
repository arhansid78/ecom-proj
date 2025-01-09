import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            Welcome to <strong>Arhanify</strong>, your trusted eCommerce
            partner. We are dedicated to providing a seamless shopping
            experience with a curated selection of high-quality products at
            unbeatable prices. Our goal is to make shopping easy, enjoyable, and
            convenient for you.
          </p>
          <p className="about-text">
            Whether you're searching for fashion, tech gadgets, or home
            essentials, we’ve got something for everyone. Our team ensures
            timely deliveries, so your orders arrive safely at your doorstep.
            Explore our expansive catalog and enjoy the convenience of shopping
            with <strong>Arhanify</strong>.
          </p>

          <div className="about-values">
            <h3 className="values-heading">Our Core Values</h3>
            <ul className="values-list">
              <li>
                <strong>Customer-Centric:</strong> Your satisfaction is our top
                priority.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We only offer products from
                trusted brands.
              </li>
              <li>
                <strong>Fast & Reliable Delivery:</strong> Quick and safe
                deliveries to your doorstep.
              </li>
              <li>
                <strong>Secure Shopping:</strong> A safe, secure, and seamless
                shopping experience.
              </li>
            </ul>
          </div>
        </div>

        <div className="about-image-container">
          <img
            src="https://via.placeholder.com/900x500?text=Your+Shopping+Journey+Begins+Here"
            alt="About Arhanify"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
