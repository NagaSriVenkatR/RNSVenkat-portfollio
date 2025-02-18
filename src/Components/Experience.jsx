import React from "react";
import './experience.css'
function Experience() {
  return (
    <div>
      <section id="experience" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 mt-5">Experience</h2>
          <div className="row">
            <div className="col-md p-5">
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Frontend Developer</h5>
                  <h5 className="card-title text-muted">Ebrain Technology</h5>
                  <p className="card-text">
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle"></i> Designed and
                        implemented responsive layouts using HTML, CSS,
                        JavaScript, and Bootstrap, ensuring seamless user
                        experiences across various devices and browsers.
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Developed dynamic
                        and reusable components using React.js, optimizing
                        website interactivity and functionality.
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Leveraged
                        Bootstrap’s grid system and CSS media queries to create
                        adaptable designs for mobile and desktop interfaces.
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Collaborated with
                        senior developers and designers, adhering to best coding
                        practices to maintain clean, maintainable, and scalable
                        code.
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Integrated
                        RESTful APIs for seamless data interaction and improved
                        application efficiency.
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Continuously
                        enhanced technical skills by mastering React hooks,
                        state management, and conditional rendering techniques.
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Conducted code
                        reviews and performance optimization to deliver
                        efficient and high-performing web applications.
                      </li>
                    </ul>
                  </p>
                  <p className="card-text">2024 - Current</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
