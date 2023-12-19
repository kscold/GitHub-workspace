import React from "react";
import "../style/Nav.scss";
import logo from "../style/images/logo.png";
import video from "../style/images/video.mp4";
import Main from "../main/Main";

const Nav = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={video} type="video/mp4" />
      </video>

      <nav>
        <div className="logo-container">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">life</a>{" "}
          </li>
          <li>
            <a href="#">conding</a>{" "}
          </li>
          <li>
            <a href="#">poto</a>{" "}
          </li>
          <li>
            <a href="#">contact</a>{" "}
          </li>
        </ul>
      </nav>
      <Main />
    </div>
  );
};

export default Nav;
