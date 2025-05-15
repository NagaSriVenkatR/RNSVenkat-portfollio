import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import "./Skills.css";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon" color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon" color="#F7DF1E" /> },
  {
    name: "React.js",
    icon: <FaReact className="skill-icon" color="#61DAFB" />,
  },
  {
    name: "Redux Saga",
    icon: <SiRedux className="skill-icon" color="#764ABC" />,
  },
  {
    name: "Bootstrap",
    icon: <BsBootstrap className="skill-icon" color="#563D7C" />,
  },
  { name: "MySQL", icon: <DiMysql className="skill-icon" color="#4479A1" /> },
  { name: "Java", icon: <FaJava className="skill-icon" color="#F89820" /> },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="row">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6 mb-4"
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="skill-card text-center">
                {skill.icon}
                <h5 className="skill-title mt-2">{skill.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
