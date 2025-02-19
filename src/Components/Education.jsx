import React from "react";
import './education.css'
function Education() {
  return (
    <div>
      <section id="education" className="bg-light py-5">
        <div className="container mt-5 p-5">
          <h2 className="text-center mb-4">Education</h2>
          <div className="row">
            {/* First Card */}
            <div className="col-md">
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">
                    Srinivasa Ramanujan Institute Of Technology
                  </h4>
                  <h5 className="card-title">Bachelor of Technology</h5>
                  <p className="card-text">Computer Science and Engineering</p>
                  <p className="card-text">2019-2023</p>
                  <p className="card-text">
                    <strong>CGPA:</strong> 6.46
                  </p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="col-md">
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Narayana Junior College</h4>
                  <h5 className="card-title">
                    Board Of Intermediate Education Of Andhra Pradesh
                  </h5>
                  <p className="card-text">MPC</p>
                  <p className="card-text">2017-2019</p>
                  <p className="card-text">
                    <strong>CGPA:</strong> 7.44
                  </p>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="col-md">
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Narayana English Medium School</h4>
                  <h5 className="card-title">
                    Board Of Secondary School Of Education Of Andhra Pradesh
                  </h5>
                  <p>MPC</p>
                  <p className="card-text">2016-2017</p>
                  <p className="card-text">
                    <strong>CGPA:</strong> 7.8
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
