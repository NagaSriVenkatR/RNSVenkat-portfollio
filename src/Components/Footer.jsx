import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container text-center">
        <motion.p
          className="footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          &copy; 2025 R. Nagasri Venkat. All Rights Reserved.
        </motion.p>
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
      </div>
    </motion.footer>
  );
}

export default Footer;
