// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Submit form logic here
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
