import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Register.css";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and register
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize navigate
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form inputs
  const validateForm = () => {
    const { username, email, password } = inputValues;
    if (!username || !password || (!isLogin && !email)) {
      toast.error("Please fill out all required fields.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { username, email, password } = inputValues;
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        // Login request
        response = await axios.post("/users/login", { username, password });
        localStorage.setItem("token", response.data.token); // Store token

        toast.success(response.data.message || "Login successful!");
        navigate("/"); // Redirect to the register page after logout
      } else {
        // Register request
        response = await axios.post("/users/register", {
          username,
          email,
          password,
        });
        toast.success(
          response.data.message || "Registration successful! Please login."
        );
      }

      // Reset input fields
      setInputValues({ username: "", email: "", password: "" });
    } catch (error) {
      // Display backend error message
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setInputValues({ username: "", email: "", password: "" }); // Clear fields when toggling
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={inputValues.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            aria-label="Username"
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              aria-label="Email"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            aria-label="Password"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Processing..." : isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={toggleForm} className="toggle-link">
          {isLogin ? "Register here" : "Login here"}
        </span>
      </p>
    </div>
  );
};

export default Register;
