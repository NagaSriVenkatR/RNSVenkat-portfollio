import React from "react";
import quick from "../Assets/quickreciept.png";
import srit from "../Assets/grievance.jpg";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 mt-5 text-dark">Projects</h2>
        <div className="row">
          {/* Quick Receipt Project */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow-lg border-0 rounded-3">
              <img
                src={quick}
                className="card-img-top img-fluid rounded-top"
                alt="Quick Receipt Project"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">Quick Receipt POS</h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  Ebrain Technology
                </h6>
                <p className="card-text">
                  Developed a Quick Receipt Application with:
                </p>
                <ul>
                  <li>
                    Responsive UI with React.js and Bootstrap for a seamless
                    experience across all devices.
                  </li>
                  <li>
                    RESTful API integration ensuring secure data handling and
                    smooth communication between front-end and back-end.
                  </li>
                  <li>
                    Real-time calculations, PDF generation, and automated tax
                    calculations for accurate and efficient receipt management.
                  </li>
                  <li>
                    Fully mobile-friendly and optimized for use on various
                    screen sizes, providing a consistent experience.
                  </li>
                  <li>
                    Implemented role-based authentication to ensure appropriate
                    access levels for users.
                  </li>
                  <li>
                    Multi-currency support and offline mode for greater
                    flexibility and accessibility.
                  </li>
                  <li>
                    <strong>Tech Stack:</strong> React.js, Bootstrap, Redux
                    Saga, Firebase, Java, MySQL
                  </li>
                </ul>
                <a
                  href="https://quick-receipt-pos.web.app/"
                  className="btn btn-primary btn-block mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/EbrainTechnologies/quickreceipt-frontend"
                  className="btn btn-secondary btn-block mt-3 ms-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub Repository
                </a>
              </div>
            </div>
          </div>

          {/* Grievance Management System */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow-lg border-0 rounded-3">
              <img
                src={srit}
                className="card-img-top img-fluid mx-auto d-block srit-logo rounded-top mt-5"
                alt="Grievance Management System"
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <h5 className="card-title text-dark">
                  Grievance Management App
                </h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  Srinivasa Ramanujan Institute of Technology
                </h6>
                <p className="card-text">
                  Developed a mobile app to improve student grievance handling:
                </p>
                <ul>
                  <li>Automated tracking for faster complaint resolution.</li>
                  <li>Real-time status updates for transparency.</li>
                  <li>
                    Analytics for institutions to identify trends and issues.
                  </li>
                  <li>User-friendly UI designed for student and admin use.</li>
                  <li>Secure authentication and data protection.</li>
                  <li>
                    <strong>Tech Stack:</strong> Java, Android Studio, Kotlin,
                    SQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
