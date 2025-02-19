import React from "react";
import quick from "../Assets/quickreciept.png";
import srit from "../Assets/logo.png";
import "./Project.css";

function Projects() {
  return (
    <div>
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <div className="row p-3 mt-3">
            <h2 className="text-center mb-5 font-weight-bold text-uppercase">
              Projects
            </h2>

            {/* Quick Receipt Project */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0">
                <img
                  src={quick}
                  className="card-img-top img-fluid rounded-top"
                  alt="Quick Receipt Project"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Quick Receipt POS
                  </h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Ebrain Technology
                  </h6>
                  <p className="card-text">
                    Developed a Quick Receipt Application with the following
                    features:
                  </p>
                  <ul>
                    <li>Responsive front-end using React and Bootstrap.</li>
                    <li>
                      RESTful API integration for secure receipt management.
                    </li>
                    <li>
                      PDF generation, real-time calculations for totals and
                      taxes.
                    </li>
                    <li>
                      Mobile-friendly design for optimal device compatibility.
                    </li>
                    <li>
                      Role-based authentication for admin and cashier access.
                    </li>
                    <li>
                      Search and filter functionality for easy receipt lookup.
                    </li>
                    <li>Multi-currency support for global usability.</li>
                    <li>Dark mode support for enhanced user experience.</li>
                    <li>
                      Offline mode using service workers for better
                      accessibility.
                    </li>
                    <li>
                      <strong>Technologies:</strong> React.js, Bootstrap, Redux
                      Saga, Firebase (Authentication & Database), Node.js
                    </li>
                  </ul>
                  <a
                    href="https://quick-receipt-pos.web.app/"
                    className="btn btn-primary btn-block py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Grievance Management System Project */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 ">
                <img
                  src={srit}
                  className="card-img-top img-fluid rounded-top mx-auto d-block srit-logo"
                  alt="Grievance Management System"
                  style={{ width: "40%" }} // Adjust width as needed
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Grievance Management System App
                  </h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Srinivasa Ramanujan Institute of Technology
                  </h6>
                  <p className="card-text">
                    Developed a mobile app to improve student grievance handling
                    with the following features:
                  </p>
                  <ul>
                    <li>
                      <strong>Streamlined Issue Resolution:</strong> Automated
                      tracking and management of complaints, reducing manual
                      inefficiencies.
                    </li>
                    <li>
                      <strong>Real-Time Status Updates:</strong> Students can
                      monitor the progress of their complaints, ensuring
                      transparency.
                    </li>
                    <li>
                      <strong>Data-Driven Insights:</strong> Integrated
                      analytics help institutions identify recurring issues and
                      improve response strategies.
                    </li>
                    <li>
                      <strong>User-Friendly Interface:</strong> Designed with an
                      intuitive UI for seamless student and administrator
                      interactions.
                    </li>
                    <li>
                      <strong>Secure & Scalable:</strong> Implemented robust
                      authentication and data protection to ensure privacy.
                    </li>
                    <li>
                      <strong>Technologies:</strong> Java, Android Studio,
                      Kotlin, SQL, Firebase (for authentication & database
                      management)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
