import React from "react";
import logo from "../../assets/logo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="footer-details">
        <p>© 2023 Sunderavel, All Right reserved</p>
      </div>
      <ul>
        <li>
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/DemonKing17">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/silent__killer">
            <i className="fa-brands fa-hackerrank"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sunder_nadar/?next=%2F">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
