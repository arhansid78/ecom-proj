import React from "react";
import "./Services.css";
import { FaTruck, FaLock, FaBox, FaUndoAlt } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <div className="container">
        <div className="grid3">
          <div className="service-1">
            <div className="icon-container">
              <FaTruck className="icon-style" />
              <h3 className="text-style">super fast and free delivery</h3>
            </div>
          </div>
          <div className="service-2">
            <div className="column-1">
              <div className="middle-container">
                <FaBox className="icon-style" />
                <h3>Non-contact shipping</h3>
              </div>
            </div>
            <div className="column-2">
              <div className="middle-container">
                <FaUndoAlt className="icon-style" />
                <h3>money back guranted</h3>
              </div>
            </div>
          </div>
          <div className="service-3">
            <div className="icon-container">
              <FaLock className="icon-style" />
              <h3 className="text-style">super secure payment system</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
