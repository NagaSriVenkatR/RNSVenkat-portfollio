import React from "react";
import { motion } from "framer-motion";
import PASS from "../Assets/Passportsize Photo1.jpg";
import "./Aboutme.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Aboutme() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="about-section"
      viewport={{ once: true }} // Trigger animation once in view
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content Section */}
          <div className="col-lg-8 p-5 mt-5">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Hi, I'm Naga Sri Venkat R, a dedicated front-end developer with a
              focus on building responsive, high-performance web applications. I
              specialize in technologies like HTML, CSS, JavaScript, and
              React.js, and I'm passionate about crafting seamless user
              experiences.
              <br />
              <br />
              I’m constantly improving my skills to stay ahead in the field of
              web development, from mastering React.js to improving web
              performance and accessibility. I strive to create intuitive and
              accessible interfaces that deliver value to users and clients
              alike.
            </p>

            {/* Social Media Links with Professional Hover Effects */}
            <div className="social-links mt-4">
              <motion.a
                href="https://www.linkedin.com/in/nagasri-venkat-r-a50402217/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
                whileHover={{ scale: 1.05, backgroundColor: "#0077b5" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaLinkedin size={30} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/NagaSriVenkatR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaGithub size={30} /> GitHub
              </motion.a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-4 p-5 mt-5 text-center">
            <motion.img
              src={PASS}
              alt="Profile"
              className="passport"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Aboutme;
