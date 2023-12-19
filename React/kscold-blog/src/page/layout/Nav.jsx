import React from "react";
import "./style/Nav.scss";

const Nav = () => {
  return (
    <div className="hero">
      <nav>
        <img src={require("./style/images/logo.png")} class="logo" />
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
    </div>
  );
};

export default Nav;
