import React, { useState } from "react";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send formData to EmailJS or backend here

    // Show success toast
    setShowToast(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
       // background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
       background: "linear-gradient(to top, #12082d, #041f29, #264d5e)",
       color: "#fff",
      }}
    >
      <div className="container position-relative">
        <h2 className="text-center mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Get in touch</h5>
            <p><i className="bi bi-envelope-fill me-2"></i> varshazalte1402@gmail.com</p>
            <p><i className="bi bi-phone-fill me-2"></i> +91 92843 67920</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Pune, Maharashtra, India</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card p-4 shadow-lg" style={{ borderRadius: "1rem" }}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="bi bi-send-fill me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Toast Message */}
        {showToast && (
          <div
            className="toast show position-fixed bottom-0 end-0 m-4 text-white bg-success"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">
                <i className="bi bi-check-circle-fill me-2"></i>
                Message sent successfully!
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
