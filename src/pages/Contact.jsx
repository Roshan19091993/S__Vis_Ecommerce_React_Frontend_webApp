import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Simple email regex for validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      // Ideally send to backend or email service here
      console.log("Contact form submitted:", formData);

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">Contact Us</h2>
      <p className="text-center text-muted mb-4">
        We would love to hear from you! Please fill out the form below and we
        will get back to you as soon as possible.
      </p>

      {submitted && (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us! We will respond shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label fw-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief summary"
          />
          {errors.subject && (
            <div className="invalid-feedback">{errors.subject}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-danger w-100">
          Send Message
        </button>
      </form>

      <div className="mt-5 text-center text-muted">
        <p>
          <strong>Phone:</strong> +91-9561411352
        </p>
        <p>
          <strong>Email:</strong> support@funckyshop.com
        </p>
        <p>
          <strong>Address:</strong> india dist nagpur ,Hingna  441110
        </p>
      </div>
    </div>
  );
};

export default Contact;
