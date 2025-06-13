import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate backend/API here

    // Show confirmation popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section bg-gradient">
            {showPopup && <div className="popup">Message Sent Successfully ✅</div>}

      <h2 className="text-center text-white mb-4">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

    </section>
  );
}

export default Contact;
