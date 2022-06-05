import React, { Component } from "react";
import "./login.css";
import NavbarComp from "./NavbarComp";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarComp />
        <div className="background">
          <div className="my-form1">
            <p id="login-text">Login</p>
            <form>
              <div className="input-container">
                <label htmlFor="name" class="form__label">
                  Email ID
                </label>
                <br />
                <input
                  placeholder="Type you email"
                  type="input"
                  class="form__field"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <br />
              <div className="input-container">
                <label htmlFor="name" class="form__label">
                  Password
                </label>
                <br />
                <input
                  placeholder="Type you password"
                  type="password"
                  class="form__field"
                  name="name"
                  id="password"
                  required
                />
              </div>
              <p id="forgot-password">Forgot Password?</p>
              <br />
              <div className="button-container">
                <input type="submit" value="Login" />
              </div>
            </form>
            <br />
            <br />
            <p>Or Sign Up Using</p>
            <span>
              <a href="javascript:void(0)" class="google">
                Google
              </a>
              <a href="javascript:void(0)" class="facebook">
                F
              </a>
              <a href="javascript:void(0)" class="github">
                G
              </a>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
