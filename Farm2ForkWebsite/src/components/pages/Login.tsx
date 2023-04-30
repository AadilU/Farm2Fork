import React from "react";
import "./Login.css";
import Navbar from "../Navbar";
import { account } from "../../../src/backendConfig";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupUser = () => {
    const promise = account.create(user.email, user.password, user.name);

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

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
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            id="submit-button"
            onClick={signupUser}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
