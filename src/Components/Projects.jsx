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
                        <strong>Technologies:</strong> React.js, Bootstrap,
                        Redux Saga
                      </li>
                    </ul>
                  </p>
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
              <div className="card shadow-sm border-0">
                <img
                  src={srit}
                  className="card-img-top img-fluid rounded-top srit-logo"
                  alt="Grievance Management System"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">
                    Grievance Management System
                  </h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Srinivasa Ramanujan Institute of Technology
                  </h6>
                  <p className="card-text">
                    Developed a mobile app to improve student grievance handling
                    with the following features:
                    <ul>
                      <li>
                        Efficient issue resolution process, eliminating
                        inefficiencies.
                      </li>
                      <li>
                        Tools to identify and address problematic areas,
                        improving operational efficiency.
                      </li>
                      <li>
                        <strong>Technologies:</strong> Java, Android Studio,
                        Kotlin, SQL
                      </li>
                    </ul>
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
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
