import React from "react";
import { motion } from "framer-motion";
import quick from "../Assets/quickreciept.png";
import srit from "../Assets/grievance.jpg";
import "./Project.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-5 bg-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
      <motion.h2
  className="text-center mb-5 mt-5 text-dark"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Projects
</motion.h2>
<div className="row">
  {/* Quick Receipt Project */}
  <motion.div
    className="col-lg-6 col-md-12 mb-4"
    custom={0}
    variants={cardVariants}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    }}
  >
    <div className="card shadow-lg border-0 rounded-3">
      <img
        src={quick}
        className="card-img-top img-fluid rounded-top"
        alt="Quick Receipt Project"
      />
      <div className="card-body">
        <h5 className="card-title text-dark">Quick Receipt POS</h5>
        <h6 className="card-subtitle mb-3 text-muted">Ebrain Technology</h6>
        <p className="card-text">Developed a Quick Receipt Application with:</p>
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
            Fully mobile-friendly and optimized for various screen
            sizes.
          </li>
          <li>
            Implemented role-based authentication for user-level access.
          </li>
          <li>Multi-currency support and offline mode included.</li>
          <li>
            <strong>Tech Stack:</strong> React.js, Bootstrap, Redux
            Saga, Firebase, Java, MySQL
          </li>
        </ul>
        <p className="mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
          🔐 Source code is private due to company policy.
        </p>
      </div>
    </div>
  </motion.div>

          {/* Grievance Management Project */}
          <motion.div
            className="col-lg-6 col-md-12 mb-4"
            custom={1}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
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
                  <li>User-friendly UI for both students and admins.</li>
                  <li>Secure authentication and data protection.</li>
                  <li>
                    <strong>Tech Stack:</strong> Java, Android Studio, Kotlin,
                    SQL
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
