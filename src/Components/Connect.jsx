import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing icon
import "./connect.css";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappMessage = `Hello, my name is ${formData.name}. My email is ${formData.email}. I would like to say: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "917671860530";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="connect-section">
      <div className="connect-container mt-5">
        <form onSubmit={handleSubmit}>
          <h2 className="connect-title mt-5">Contact Me</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`connect-input ${errors.name ? "is-invalid" : ""}`}
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="connect-error">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`connect-input ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="connect-error">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className={`connect-input ${errors.message ? "is-invalid" : ""}`}
              id="message"
              rows="3"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="connect-error">{errors.message}</div>
            )}
          </div>

          <button type="submit" className="connect-button">
            <FaPaperPlane /> Send WhatsApp Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Connect;
