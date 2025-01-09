import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Sorry, the page you are looking for does not exist.
        </p>
        <NavLink to="/" className="error-home-link">
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
