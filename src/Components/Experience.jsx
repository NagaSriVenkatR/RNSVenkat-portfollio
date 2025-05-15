import React from "react";
import { motion } from "framer-motion";
import "./experience.css";
import { BiCheckCircle } from "react-icons/bi";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function Experience() {
  return (
    <motion.section
      id="experience"
      className="bg-light py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-5 mt-5 text-uppercase fw-bold text-dark"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="row justify-content-center">
          <motion.div
            className="col-lg-8 col-md-10 col-sm-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="card experience-card border-0 shadow-lg rounded-3">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold text-primary">
                  Frontend Developer
                </h5>
                <h6 className="card-subtitle mb-3 text-secondary">
                  Ebrain Technology
                </h6>

                <motion.ul
                  className="list-unstyled"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    `Designed and implemented responsive layouts using HTML, CSS, JavaScript, and Bootstrap, ensuring seamless experiences across devices.`,
                    `Developed dynamic and reusable components using React.js, optimizing website interactivity.`,
                    `Used Bootstrap’s grid system & CSS media queries to create adaptable UI for mobile and desktop users.`,
                    `Integrated Redux Saga for state management, improving data consistency across components.`,
                    `Implemented RESTful API calls to fetch and display real-time data, improving page performance.`,
                    `Collaborated with UX designers to improve UI/UX, increasing user engagement by 20%.`,
                    `Debugged and optimized code, reducing page load time by 30%.`,
                    `Implemented authentication and role-based access control using Firebase.`,
                    `Conducted code reviews and assisted junior developers in improving code quality.`,
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      className="d-flex align-items-start mb-3"
                      variants={itemVariant}
                    >
                      <BiCheckCircle className="text-success me-2 mt-1" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: text.replace(
                            /(HTML|CSS|JavaScript|Bootstrap|React\.js|Redux Saga|Firebase|20%|30%)/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    </motion.li>
                  ))}
                </motion.ul>

                <p className="card-text text-muted">
                  <strong>MAY 2024 - Current</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
