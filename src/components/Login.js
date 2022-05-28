import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="background">
        <div className="my-form">
          <p id="login-text">Login</p>
          <form>
            <div className="input-container">
              <label for="name" class="form__label">
                Username
              </label>
              <br />
              <input
                type="input"
                class="form__field"
                name="name"
                id="name"
                required
              />
            </div>
            <br />
            <div className="input-container">
              <label for="name" class="form__label">
                Password{" "}
              </label>
              <br />
              <input
                type="password"
                class="form__field"
                name="name"
                id="name"
                required
              />
            </div>
            <p id="forgot-password">Forgot Password?</p>
            <div className="button-container">
              <input type="submit" value="Login" />
            </div>
          </form>
          <br />
          <br />
          <p>Or Sign Up Using</p>
          <span>
            <a href="javascript:void(0)" class="facebook">
              F
            </a>
            <a href="javascript:void(0)" class="twitter">
              T
            </a>
            <a href="javascript:void(0)" class="googleplus">
              G
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
