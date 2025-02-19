import React, { useState, useEffect, useCallback } from "react";
import LOGO from "../Assets/v.jpg";
import "./navbar.css";
import PASS from "../Assets/Passportsize Photo1.jpg";
import RESUME from "../Assets/RNSVenkat-CV.pdf";

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar background change
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar fixed-top ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={LOGO} alt="Logo" className="navbar-logo" />
          </a>

          {/* Mobile Menu Toggle */}
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

          {/* Navbar Links */}
          <div className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a href="#contact" className="btn-contact">
              Contact Me 📩
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 text-lg-start text-center">
              <p className="intro-text">Welcome to my Portfolio</p>
              <h1 className="main-heading">Hi there!</h1>
              <h2 className="name-heading">I'm Naga Sri Venkat R</h2>
              <h3 className="role-heading">Frontend Developer</h3>
              <div className="button-group d-md-table-cell d-none justify-content-center">
                <a href={RESUME} download className="btn-resume">
                  📄 Resume
                </a>
                <a href="#about" className="btn-about">
                  ⬇️ About Me
                </a>
              </div>
              <div className="button-group d-table-cell d-md-none justify-content-center">
                <a href={RESUME} download className="btn-resume">
                  📄
                </a>
                <a href="#about" className="btn-about">
                  ⬇️
                </a>
              </div>
            </div>

            {/* Right Image */}
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
