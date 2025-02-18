import React, { useState, useEffect } from "react";
import LOGO from "../Assets/v.jpg";
import "./navbar.css";
import PASS from "../Assets/Passportsize Photo1.jpg";
import RESUME from "../Assets/RNSVenkat-CV.pdf";

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm animated-navbar ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img
              src={LOGO}
              alt="Logo"
              className="img-fluid"
              style={{ height: "40px" }}
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse fade-in ${
              isMenuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto d-flex gap-3">
              {navLinks.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link nav-link-hover"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a href="#contact" className="btn btn-contact btn-animate">
              Contact Me 📩
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center mt-5">
            {/* Left Content */}
            <div className="col-lg-6 text-lg-start text-center">
              <p className="fs-5">Welcome to my Portfolio</p>
              <h1 className="fw-bold">Hi there!</h1>
              <h2 className="text-primary fw-bold">I'm Naga Sri Venkat R</h2>
              <h3 className="text-light">Frontend Developer</h3>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <a
                  href={RESUME}
                  download
                  className="btn btn-danger btn-animate"
                >
                  Download Resume 📄
                </a>
                <a href="#about" className="btn btn-info btn-animate">
                  About Me ⬇️
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={PASS}
                alt="Profile"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: "75%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomNavbar;
