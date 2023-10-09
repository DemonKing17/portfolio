import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="details">
      <div className="about">
        <h3>About me</h3>
        <p>
          As a recent graduate in computer science, I am a passionate and
          motivated software developer eager to embark on a dynamic career in
          the tech industry. With a strong foundation in programming languages
          such as JavaScript, Python, and Java, I am well-equipped to contribute
          to innovative software solutions. During my academic journey, I honed
          my problem-solving skills through challenging projects and coursework,
          gaining experience in areas like web development, data structures, and
          software engineering principles. I am highly adaptable, continuously
          learning, and excited to collaborate with experienced professionals to
          create cutting-edge software that addresses real-world challenges. My
          drive for excellence, coupled with a commitment to staying current
          with industry trends, makes me a valuable addition to any software
          development team.
        </p>
      </div>
      <div className="myself">
        <div className="studies">
          <h3>Education</h3>
          <p>
            I have completed my Bachelors degree in Information Technology
            (B.sc-IT) from Mumbai University in the year 2021, Scoring CGPA of
            6.33 .
          </p>
          <p>
            I have completed my 12<sup>th</sup> standard from Maharashtra state
            board scoring 332 out of 650 of 51.09 percentage.
          </p>
          <p>
            I have completed my 10<sup>th</sup> standard from Maharashtra state
            board scoring 314 out of 500 of 62.80 percentage.
          </p>
        </div>
        <div className="studies">
          <h3>Skills</h3>
          <p>
            HTML, CSS, JavaScript, Node js, React js, GITHub, MongoDB, Java,
            Python, Express, SQL.
          </p>
        </div>
        <div className="studies">
          <h3>Achivements</h3>
          <p>
            I have played Chess from 5<sup>th</sup> standard to 12<sup>th</sup>
            standard and always ranked First or Second.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
