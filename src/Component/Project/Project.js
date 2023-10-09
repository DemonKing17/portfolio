import p1 from "../../assets/w2.jpg";
import p2 from "../../assets/w5.jpg";

import "./Project.css";

import React from "react";

const Project = () => {
  return (
    <>
      <h2>Projects Details</h2>
      <div className="container">
        <a href="https://github.com/DemonKing17/portfolio" className="content">
          <div className="img-content">
            <img src={p1} alt="projectImg"></img>
          </div>
          <div className="para-content">
            <h4>Portfolio</h4>
            <p>
              A project portfolio website built with React.js is a dynamic and
              visually appealing online platform that showcases a collection of
              your personal or professional projects. This portfolio allows you
              to display your work, skills, and achievements to potential
              employers, clients, or collaborators.
            </p>
          </div>
        </a>
        <a href="https://github.com/DemonKing17/project2" className="content">
          <div className="img-content">
            <img src={p2} alt="projectImg"></img>
          </div>
          <div className="para-content">
            <h4>Income-Expense-Tracker</h4>
            <p>
              The Income-Expense Tracker is a full-stack web application that
              provides users with the ability to manage and monitor their income
              and expenses. It offers a range of features and functionalities to
              assist users in budgeting, tracking their financial activities,
              and achieving their financial goals.
            </p>
          </div>
        </a>
        <a href="https://github.com/DemonKing17/Proj_calc" className="content">
          <div className="img-content">
            <img src={p1} alt="projectImg"></img>
          </div>
          <div className="para-content">
            <h4>Calculator</h4>
            <p>
              A calculator webpage project is a web application that provides a
              user-friendly interface for performing mathematical calculations.
              It's a practical and educational tool that can be used by
              individuals, students, or professionals to perform a wide range of
              calculations.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;
