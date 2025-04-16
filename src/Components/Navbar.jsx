import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import LOGO from "../Assets/v.jpg";
import "./navbar.css";
import PASS from "../Assets/Passportsize Photo1.jpg";
import RESUME from "../Assets/RNSVenkat-CV.pdf";

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
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start text-center mt-3">
              <p className="intro-text">Welcome to my Portfolio</p>
              <h1 className="main-heading">Hi there!</h1>
              <h2 className="name-heading">I'm Naga Sri Venkat R</h2>
              <h3 className="role-heading">Frontend Developer</h3>

              <div className="button-group d-md-flex d-none justify-content-center">
                <a href={RESUME} download className="btn-resume">
                  📄 Resume
                </a>
                <Link to="about" smooth={true} className="btn-about">
                  ⬇️ About Me
                </Link>
              </div>
              <div className="button-group d-flex d-md-none justify-content-center">
                <a href={RESUME} download className="btn-resume">
                  📄
                </a>
                <Link to="about" smooth={true} className="btn-about">
                  ⬇️
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-3">
              <img src={PASS} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomNavbar;
