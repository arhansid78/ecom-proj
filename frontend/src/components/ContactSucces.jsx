import React from "react";
import { Link } from "react-router-dom";
import "./ContactSucces.css";
const ContactSuccess = () => {
  return (
    <div className="contact-success">
      <div className="success-message">
        <h1>Thank You!</h1>
        <p>
          Your message has been successfully sent. We will get back to you
          shortly.
        </p>
      </div>
      <div className="success-action">
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ContactSuccess;
