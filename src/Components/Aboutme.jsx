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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="about-section"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content Section */}
          <div className="col-lg-8 p-5 mt-5">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Hello! I'm a passionate front-end developer skilled in creating
              interactive and responsive web applications. I enjoy solving
              problems and bringing creative designs to life using technologies
              like HTML, CSS, JavaScript, and React.js. I'm always eager to
              learn new technologies and improve my skills to create better and
              optimized web applications.
            </p>
            {/* LinkedIn & GitHub Buttons with Motion */}
            <div className="social-links mt-4">
              <motion.a
                href="https://www.linkedin.com/in/nagasri-venkat-r-a50402217/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaLinkedin size={30} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/NagaSriVenkatR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                whileHover={{ scale: 1.1 }}
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
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Aboutme;
