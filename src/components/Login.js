import React, { Component } from "react";
import "./login.css";
import NavbarComp from "./NavbarComp";
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
                  placeholder="💌   Type you email"
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
                  placeholder="🔑   Type you password"
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
                <input type="submit" value="Login" id="login_button" />
              </div>
            </form>
            <br />
            <p class="continue">Or continue with</p>
            <span style={{ display: "block" }}>
              <BsGoogle alt="google" className="temp" size={30} />
              <BsFacebook
                alt="facebook"
                className="temp"
                size={30}
                id="facebook-logo"
              />
              <FaGithub alt="github" className="temp" size={30} />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
