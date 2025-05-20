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
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row align-items-center mt-2">
          {/* Text Content Section */}
          <div className="col-lg-8 p-5 mt-5">
            <motion.h2
              className="about-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>

            {/* Paragraph animation with staggered lines */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {[
                "Hi, I'm Naga Sri Venkat Rentala — a Frontend Developer with a passion for building responsive, user-centric web applications.",
                "I specialize in HTML, CSS, JavaScript, React.js, and Redux-Saga, and focus on clean, accessible interfaces.",
                "I'm always learning and evolving, from enhancing React components and managing complex state with Redux-Saga to improving performance and accessibility.",
                "I aim to deliver high-quality, scalable front-end solutions that make a real impact.",
              ].map((line, index) => (
                <motion.p
                  key={index}
                  className="about-text"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Social Media Links with Hover Effects */}
            <motion.div
              className="social-links mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.a
                href="https://www.linkedin.com/in/nagasri-venkat-r-a50402217/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #0077b5" }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaLinkedin size={30} /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/NagaSriVenkatR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #333" }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaGithub size={30} /> GitHub
              </motion.a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="col-lg-4 p-5 mt-5 text-center">
            <motion.img
              src={PASS}
              alt="Profile"
              className="passport"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ rotate: 3, scale: 1.02 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Aboutme;
