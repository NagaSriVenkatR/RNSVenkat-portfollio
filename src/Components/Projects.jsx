import React from "react";
import quick from "../Assets/quickreciept.png";
import srit from "../Assets/logo.png";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 mt-5">Projects</h2>
        <div className="row">
          {/* Quick Receipt Project */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow-sm border-0">
              <img
                src={quick}
                className="card-img-top img-fluid"
                alt="Quick Receipt Project"
              />
              <div className="card-body">
                <h5 className="card-title">Quick Receipt POS</h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  Ebrain Technology
                </h6>
                <p className="card-text">
                  Developed a Quick Receipt Application with:
                </p>
                <ul>
                  <li>Responsive UI with React and Bootstrap.</li>
                  <li>RESTful API integration for secure data handling.</li>
                  <li>
                    Real-time calculations, PDF generation, and tax automation.
                  </li>
                  <li>Mobile-friendly and optimized for multiple devices.</li>
                  <li>Role-based authentication for different user access.</li>
                  <li>
                    Multi-currency support and offline mode for accessibility.
                  </li>
                  <li>
                    <strong>Tech Stack:</strong> React.js, Bootstrap, Redux
                    Saga, Firebase, Java, MySQL
                  </li>
                </ul>
                <a
                  href="https://quick-receipt-pos.web.app/"
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Grievance Management System */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card shadow-sm border-0">
              <img
                src={srit}
                className="card-img-top img-fluid mx-auto d-block srit-logo"
                alt="Grievance Management System"
                style={{ width: "40%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Grievance Management System App</h5>
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
