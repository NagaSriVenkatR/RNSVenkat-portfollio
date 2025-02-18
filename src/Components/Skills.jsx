import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

function Skills() {
  return (
    <div>
      <section id="skills" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 mt-5">Skills</h2>
          <div className="row">
            {/* HTML */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <FaHtml5 size={50} color="#E44D26" />
                  <h5 className="card-title mt-3">HTML</h5>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <FaCss3Alt size={50} color="#1572B6" />
                  <h5 className="card-title mt-3">CSS</h5>
                </div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <FaJs size={50} color="#F7DF1E" />
                  <h5 className="card-title mt-3">JavaScript</h5>
                </div>
              </div>
            </div>

            {/* React.js */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <FaReact size={50} color="#61DAFB" />
                  <h5 className="card-title mt-3">React.js</h5>
                </div>
              </div>
            </div>

            {/* Redux Saga */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <SiRedux size={50} color="#764ABC" />
                  <h5 className="card-title mt-3">Redux Saga</h5>
                </div>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <BsBootstrap size={50} color="#563D7C" />
                  <h5 className="card-title mt-3">Bootstrap</h5>
                </div>
              </div>
            </div>

            {/* MySQL */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <DiMysql size={50} color="#4479A1" />
                  <h5 className="card-title mt-3">MySQL</h5>
                </div>
              </div>
            </div>

            {/* Java */}
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm border-light">
                <div className="card-body">
                  <FaJava size={50} color="#F89820" />
                  <h5 className="card-title mt-3">Java</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
