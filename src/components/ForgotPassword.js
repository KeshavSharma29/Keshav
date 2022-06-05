import React, { Component } from "react";
import "./forgotpassword.css";
import NavbarComp from "./NavbarComp";

class ForgotPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarComp />
        <div className="background">
          <div class="my-form2">
            <p id="login-text">Forgot Password</p>
            <p id="email-text">
              Enter the email address associated with your account and we will
              send an activation link to reset the password
            </p>
            <form>
              <br />
              <div class="input-container">
                <label htmlFor="name" class="form_label">
                  Email ID
                </label>
                <br />
                <input
                  placeholder="Type you email"
                  type="email"
                  class="form_field"
                  name="name"
                  id="password"
                  required
                />
              </div>
              <br />
              <br />
              <div className="button-container">
                <input type="submit" value="Continue" id="continue" />
              </div>
              <br />
              <br />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
