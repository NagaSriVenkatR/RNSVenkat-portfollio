import React from "react";
import "./experience.css";
import { BiCheckCircle } from "react-icons/bi";

function Experience() {
  return (
    <section id="experience" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 mt-5 text-uppercase fw-bold text-dark">
          Experience
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card experience-card border-0 shadow-lg rounded-3">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold text-primary">
                  Frontend Developer
                </h5>
                <h6 className="card-subtitle mb-3 text-secondary">
                  Ebrain Technology
                </h6>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Designed and implemented responsive layouts using
                      <strong> HTML, CSS, JavaScript, and Bootstrap</strong>,
                      ensuring seamless experiences across devices.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Developed dynamic and reusable components using
                      <strong> React.js</strong>, optimizing website
                      interactivity.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Used Bootstrap’s grid system & CSS media queries to create
                      adaptable UI for mobile and desktop users.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Integrated <strong>Redux Saga</strong> for state
                      management, improving data consistency across components.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Implemented RESTful API calls to fetch and display
                      real-time data, improving page performance.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Collaborated with UX designers to improve UI/UX,
                      increasing user engagement by <strong>20%</strong>.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Debugged and optimized code, reducing page load time by{" "}
                      <strong>30%</strong>.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Implemented authentication and role-based access control
                      using Firebase.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <BiCheckCircle className="text-success me-2 mt-1" />
                    <span>
                      Conducted <strong>code reviews</strong> and assisted
                      junior developers in improving code quality.
                    </span>
                  </li>
                </ul>
                <p className="card-text text-muted">
                  <strong>MAY 2024 - Current</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
