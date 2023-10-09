import React from "react";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
