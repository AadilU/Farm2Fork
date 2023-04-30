import React from "react";
import "./Login.css";
import Navbar from "../Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <form className="login-form">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary" id="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
