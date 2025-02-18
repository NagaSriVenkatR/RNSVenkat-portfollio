import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import './footer.css'
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white py-3 text-center">
        <div className="container">
          <p>&copy; 2025 R. Nagasri Venkat. All Rights Reserved.</p>
          <div>
            <a
              href="https://www.linkedin.com/in/nagasri-venkat-r-a50402217/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
            >
              <FaLinkedin size={30} style={{ color: "#0e76a8" }} />
            </a>
            <a
              href="https://github.com/NagaSriVenkatR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://x.com/Venkatn17033296"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
            >
              <FaTwitter size={30} style={{ color: "#1DA1F2" }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
