import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from '../../assests/images/logo.png'

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className="sticky-top">
        <Link to="/" className="logoname">
          <img src={logo} width="40px" /> <span>GalaCube</span>
        </Link>

        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <Link to="/login" className="loginBtn">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="signupBtn">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
