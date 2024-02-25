import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import signupImg from "../../assests/images/signup_image.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const [tab1, setTab1] = useState("tab-active");
  const [tab2, setTab2] = useState("tab-inactive");

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="left-col">
          <div className="signup-section">
            <h3 className="mb-4">Sign Up</h3>
            <h5 className="mb-4">I am...</h5>

            <div className="d-flex tabs form-control">
              <div
                className={tab1}
                onClick={() => {
                  setTab1("tab-active");
                  setTab2("tab-inactive");
                }}
              >
                Customer
              </div>
              <div
                className={tab2}
                onClick={() => {
                  setTab1("tab-inactive");
                  setTab2("tab-active");
                }}
              >
                Supplier
              </div>
            </div>

            <div className="text-center">
              <input
                className="form-control textbox"
                id="name"
                placeholder="Enter your name"
              />

              <input
                className="form-control textbox"
                id="email"
                placeholder="Enter your email address"
              />

              <input
                className="form-control textbox"
                id="password"
                placeholder="Enter your password"
              />

              <input
                className="form-control textbox"
                id="confirm-password"
                placeholder="Confirm your password"
              />

              <div className="mt-5">
                <button className="form-control signup-btn">
                  Create Account
                </button>
              </div>

              <div className="my-2">or</div>
              <div className="mb-5">Continue with your account</div>

              <div className="d-flex btn-div">
                <div className="form-control google-btn me-3">
                  <i className="fab fa-google me-2"></i>Google
                </div>
                <div className="form-control fb-btn">
                  <i className="fab fa-facebook me-2"></i>
                  Facebook
                </div>
              </div>

              <div className="mt-4">
                Already have an account?{" "}
                <Link className="login-link" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right-col">
          <img src={signupImg} width="100%" />
        </div>
      </div>
    </>
  );
}
