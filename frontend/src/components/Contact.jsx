import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwwoyvl"); // Replace with your actual Formspree form ID
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const notifyError = () =>
    toast.error("Failed to send the message. Try again!");

  // To ensure only one submission happens at a time
  useEffect(() => {
    if (state.succeeded) {
      navigate("/contactsuccess");
    }
  }, [state.succeeded, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent multiple form submissions

    if (state.succeeded || isSubmitting) return; // Prevent submission if already succeeded or submitting

    setIsSubmitting(true); // Set submitting state to true

    try {
      await handleSubmit(e); // Formspree's submit handler
    } catch (error) {
      notifyError();
    } finally {
      setIsSubmitting(false); // Reset submitting state after attempt
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting || state.submitting}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
