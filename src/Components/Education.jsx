import React from "react";
import { motion } from "framer-motion";
import "./education.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
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

function Education() {
  const educationData = [
    {
      title: "Srinivasa Ramanujan Institute Of Technology",
      subtitle: "Bachelor of Technology",
      stream: "Computer Science and Engineering",
      year: "2019 - 2023",
      cgpa: "6.46",
    },
    {
      title: "Narayana Junior College",
      subtitle: "Board Of Intermediate Education Of Andhra Pradesh",
      stream: "MPC",
      year: "2017 - 2019",
      cgpa: "7.44",
    },
    {
      title: "Narayana English Medium School",
      subtitle: "Board Of Secondary School Of Education Of Andhra Pradesh",
      stream: "MPC",
      year: "2016 - 2017",
      cgpa: "7.8",
    },
  ];

  return (
    <section id="education" className="bg-light py-5">
      <div className="container-fluid mt-5 px-4">
        <motion.h2
          className="text-center mb-5 text-uppercase fw-bold text-dark"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {educationData.map((edu, i) => (
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12"
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="card edu-card border-0 shadow-sm hover-effect"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-body text-center">
                  <h4 className="card-title fw-bold text-primary">
                    {edu.title}
                  </h4>
                  <h5 className="card-subtitle mb-2 text-secondary">
                    {edu.subtitle}
                  </h5>
                  <p className="card-text text-muted">{edu.stream}</p>
                  <p className="card-text text-muted">{edu.year}</p>
                  <p className="card-text">
                    <strong>CGPA:</strong> {edu.cgpa}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
