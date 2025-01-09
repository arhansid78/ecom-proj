import React from "react";
import "./Trusted.css";

const Trusted = () => {
  return (
    <>
      <div className="container">
        <div className="grid5">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
            />
          </div>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Logo"
            />
          </div>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google Logo"
            />
          </div>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
