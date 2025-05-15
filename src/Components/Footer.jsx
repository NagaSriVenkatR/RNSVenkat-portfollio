import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";
import "./footer.css";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container footer-content">
        {/* Left: Copyright */}
        <motion.p
          className="footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          &copy; 2025 R. Nagasri Venkat. All Rights Reserved.
        </motion.p>

        {/* Center: Social Icons */}
        <div className="footer-icons">
          <motion.a
            href="https://www.linkedin.com/in/nagasri-venkat-r-a50402217/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="icon linkedin" />
          </motion.a>
          <motion.a
            href="https://github.com/NagaSriVenkatR"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="icon github" />
          </motion.a>
          <motion.a
            href="https://x.com/Venkatn17033296"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter className="icon twitter" />
          </motion.a>
        </div>

        {/* Right: Scroll to top button */}
        {showButton && (
          <motion.button
            className="scroll-top-btn"
            onClick={handleScrollTop}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </div>
    </motion.footer>
  );
}

export default Footer;
