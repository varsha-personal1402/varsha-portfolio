import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-white pt-5 pb-4 position-relative"
      style={{
        //background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        background: "linear-gradient(to top, #12082d, #041f29, #264d5e)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "4px solidrgb(45, 27, 27)"
      }}
    >
      <div
        className="container text-center rounded shadow-lg py-4 px-3"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px"
        }}
      >
        <h4 className="fw-bold">Varsha Zalte</h4>
        <p className="fst-italic">Thanks for visiting my portfolio!</p>

        <div className="mb-3 d-flex justify-content-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)" )}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-white fs-4"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)" )}
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-light small mb-0">
          © {new Date().getFullYear()} Varsha Zalte. All rights reserved.
        </p>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="btn btn-outline-light position-absolute"
            style={{
              bottom: "15px",
              right: "15px",
              borderRadius: "50%",
              padding: "10px 12px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.4)"
            }}
            title="Back to Top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
