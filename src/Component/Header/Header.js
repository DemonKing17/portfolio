import React from "react";
import "./Header.css";
import profileImg from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hy ! Am</h1>
        <h2 className="header-name">Sunderavel Nadar</h2>
        <h2 className="header-title">I'm a Fullstack Developer</h2>
        <p>
          As a recent graduate with a B.sc-IT degree, I am eager to apply my
          knowledge and skills in React js, Node js, HTML, CSS, Javascript,
          Express and MongoDB. I am seeking an entry-level position that will
          allow me to contribute to a dynamic team and continue to develop my
          expertise.
        </p>
      </div>
      <div className="image-content">
        <img src={profileImg} alt=""></img>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
    </div>
  );
};

export default Header;
