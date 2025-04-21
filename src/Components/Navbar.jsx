import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import LOGO from "../Assets/v.jpg";
import "./navbar.css";
import PASS from "../Assets/Passportsize Photo1.jpg";
import { motion } from "framer-motion";
import RESUME from "../Assets/RNSVenkat_CV.pdf";

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

  // Handle scroll to change navbar background
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

    // Check if 'contact' section is in view and change its active state
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
      {/* Navbar with Motion */}
      <nav className={`navbar fixed-top ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={LOGO} alt="Logo" className="navbar-logo" />
          </a>

          <button
            className={`navbar-toggler ${
              isMenuOpen ? "open" : ""
            } d-lg-none d-table-cell`}
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
                  <li key={index} className="nav-item">
                    <Link
                      className={`nav-link ${isActive ? "active" : ""}`}
                      to={sectionId} // 'to' links to the section ID
                      spy={true} // Makes the section active when scrolled into view
                      smooth={true} // Smooth scrolling effect
                      offset={-50} // Offset for navbar height
                      duration={500} // Smooth scrolling duration (in ms)
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="contact" // This will scroll to the contact section
              smooth={true} // Smooth scrolling effect
              offset={-50} // Offset for navbar height
              duration={500} // Smooth scrolling duration (in ms)
              className={`btn-contact ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me 📩
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Motion */}
      <section id="home" className="hero-section  parallax-bg">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-6 text-lg-start text-center mt-3 justify-content-center">
              <motion.p
                className="intro-text text-center floating"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Welcome to my Portfolio
              </motion.p>

              <motion.h1
                className="main-heading text-center floating"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi there!
              </motion.h1>

              <motion.h2
                className="name-heading text-center floating"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm Naga Sri Venkat R
              </motion.h2>

              <motion.h3
                className="role-heading text-center floating"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Frontend Developer
              </motion.h3>

              {/* 💻 Tech Stack Badges */}
              <motion.div
                className="tech-stack-badges mt-3 floating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
                <span className="badge">JavaScript</span>
                <span className="badge">React.js</span>
                <span className="badge">Redux</span>
                <span className="badge">Redux-Saga</span>
                <span className="badge">Bootstrap</span>
              </motion.div>

              {/* ✨ Inspirational Quote */}
              <motion.p
                className="quote-text mt-4 floating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                “Code is not just code, it's a craft that connects ideas with
                reality.”
              </motion.p>

              {/* 🎯 Buttons for Resume & About Me */}
              <motion.div
                className="button-group d-md-flex d-none justify-content-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <a
                  href={RESUME}
                  download
                  className="btn-resume"
                  aria-label="Download Resume"
                >
                  📄 Resume
                </a>
                <Link
                  to="about"
                  smooth={true}
                  className="btn-about"
                  aria-label="Go to About Section"
                >
                  ⬇️ About Me
                </Link>
              </motion.div>

              <motion.div
                className="button-group d-flex d-md-none justify-content-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <a
                  href={RESUME}
                  download
                  className="btn-resume"
                  aria-label="Download Resume"
                >
                  📄
                </a>
                <Link
                  to="about"
                  smooth={true}
                  className="btn-about"
                  aria-label="Go to About Section"
                >
                  ⬇️
                </Link>
              </motion.div>
            </div>

            {/* 👤 Profile Image */}
            <div className="col-lg-6 text-center mt-3">
              <motion.img
                src={PASS}
                alt="Profile of Naga Sri Venkat R"
                className="profile-img floating"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomNavbar;
