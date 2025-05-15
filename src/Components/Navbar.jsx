import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import LOGO from "../Assets/v.jpg";
import PASS from "../Assets/Passportsize Photo1.jpg";
import RESUME from "../Assets/RNSVenkat_CV.pdf";
import "./navbar.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    const sections = navLinks.map((link) => link.toLowerCase());
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection("contact");
      }
    }
  }, [navLinks]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`navbar fixed-top ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <motion.img
              src={LOGO}
              alt="Logo"
              className="navbar-logo"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 1 }}
            />
          </a>

          <button
            className={`navbar-toggler ${isMenuOpen ? "open" : ""} d-lg-none`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((item, index) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <motion.li
                    key={index}
                    className="nav-item"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      className={`nav-link ${isActive ? "active" : ""}`}
                      to={sectionId}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      style={{
                        textDecoration: "none",
                        color: isActive ? "#007bff" : "white",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className={`btn-contact ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              Contact Me 📩
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section parallax-bg">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-6 text-lg-start mt-3">
              <motion.p
                className="intro-text"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Welcome to my Portfolio
              </motion.p>

              <motion.h1
                className="main-heading"
                initial={{ scale: 0.8, rotateX: 90 }}
                animate={{ scale: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hi there!
              </motion.h1>

              <motion.h2
                className="name-heading"
                initial={{ rotateY: -90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I'm Naga Sri Venkat Rentala
              </motion.h2>

              <motion.h3
                className="role-heading"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    2000,
                    "Web Developer",
                    2000,
                    "React Js Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Java Script Developer",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </motion.h3>

              <motion.div
                className="tech-stack-badges mt-3 d-flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Redux",
                  "Redux-Saga",
                  "Bootstrap",
                ].map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="badge"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                className="quote-text mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                “Code is not just code, it's a craft that connects ideas with
                reality.”
              </motion.p>

              <motion.div
                className="button-group d-flex gap-3 justify-content-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <a href={RESUME} download className="btn-resume">
                  📄 Resume
                </a>
                <Link to="about" smooth={true} className="btn-about">
                  ⬇️ About Me
                </Link>
              </motion.div>
            </div>

            <div className="col-lg-6 text-center mt-3">
              <motion.img
                src={PASS}
                alt="Profile"
                className="profile-img"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 1.4 }}
                whileHover={{ rotateZ: 5, scale: 1.05 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomNavbar;
