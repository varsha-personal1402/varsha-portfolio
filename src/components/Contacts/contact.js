import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate this with your backend or an API here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting me!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
