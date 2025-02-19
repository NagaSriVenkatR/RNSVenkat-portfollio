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

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <motion.div
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                {skill.icon}
                <h5 className="skill-title">{skill.name}</h5>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
