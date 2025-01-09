import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaReact, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer-grid">
        <div className="footer-heading">
          <h5>Arhanify</h5>
          <p className="footer-description">
            Discover premium products crafted with exceptional quality. Enjoy
            exclusive offers and enhance your shopping experience with us!
          </p>
        </div>
        <div className="footer-subscribe">
          <p>Subscribe for important updates</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email" />
            <button>
              <NavLink to="/contact" className="subscribe-button">
                Subscribe
              </NavLink>
            </button>
          </div>
        </div>
        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact size={20} color="#61DBFB" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={20} color="#FF0000" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} color="#C13584" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} color="#1877F2" />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h5>Call Us</h5>
          <p>+91 9598324637</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@{new Date().getFullYear()} Shop Here. All rights reserved</p>
        <NavLink to="/privacy-policy" className="footer-link">
          Privacy Policy
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
