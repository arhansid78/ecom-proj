import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Importing useNavigate
import { toast } from "react-toastify";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    if (!token) {
      toast.error("Yuo are allready logout!");
    } else {
      localStorage.removeItem("token"); // Remove token from local storage
      navigate("/login"); // Redirect to the register page after logout
      toast.error("Succesfully Logout");
    }
  };

  return (
    <header className="header">
      <nav className="nav-item">
        <NavLink to="/" aria-label="Home">
          <h1 className="shoppers-heading">Arhanify</h1>
        </NavLink>

        <ul className="ul-item">
          <li>
            <NavLink to="/" aria-label="Navigate to Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" aria-label="Navigate to About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" aria-label="Navigate to Products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" aria-label="Navigate to Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-bottom">
        <NavLink to="/login">
          <button className="nav-btn">Login</button>
        </NavLink>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
