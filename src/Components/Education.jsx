import React from "react";
import "./education.css";

function Education() {
  return (
    <section id="education" className="bg-light py-5">
      <div className="container-fluid mt-5 px-4">
        <h2 className="text-center mb-5 text-uppercase fw-bold text-dark">
          Education
        </h2>
        <div className="row g-4 justify-content-center">
          {/* First Card */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card edu-card border-0 shadow-sm hover-effect">
              <div className="card-body text-center">
                <h4 className="card-title fw-bold text-primary">
                  Srinivasa Ramanujan Institute Of Technology
                </h4>
                <h5 className="card-subtitle mb-2 text-secondary">
                  Bachelor of Technology
                </h5>
                <p className="card-text text-muted">
                  Computer Science and Engineering
                </p>
                <p className="card-text text-muted">2019 - 2023</p>
                <p className="card-text">
                  <strong>CGPA:</strong> 6.46
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card edu-card border-0 shadow-sm hover-effect">
              <div className="card-body text-center">
                <h4 className="card-title fw-bold text-primary">
                  Narayana Junior College
                </h4>
                <h5 className="card-subtitle mb-2 text-secondary">
                  Board Of Intermediate Education Of Andhra Pradesh
                </h5>
                <p className="card-text text-muted">MPC</p>
                <p className="card-text text-muted">2017 - 2019</p>
                <p className="card-text">
                  <strong>CGPA:</strong> 7.44
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card edu-card border-0 shadow-sm hover-effect">
              <div className="card-body text-center">
                <h4 className="card-title fw-bold text-primary">
                  Narayana English Medium School
                </h4>
                <h5 className="card-subtitle mb-2 text-secondary">
                  Board Of Secondary School Of Education Of Andhra Pradesh
                </h5>
                <p className="card-text text-muted">MPC</p>
                <p className="card-text text-muted">2016 - 2017</p>
                <p className="card-text">
                  <strong>CGPA:</strong> 7.8
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
