import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./upload.css";
import NavbarComp from "./NavbarComp";
import "../gloria-text.png";

class Upload extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
        <div className="background">
          <div className="my-form">
            <div>
              <img src={require("../gloria-text.png")} id="logo-in-form" />
            </div>
            <div id="upload-div">
              <p id="upload-text">
                This upload form is used to collect files of any type, such as
                images, and recorded videos from users.
              </p>
            </div>
            <br />
            <form>
              <div className="input-container">
                <input
                  placeholder="Title"
                  type="input"
                  class="form__field"
                  name="name"
                  id="title"
                  required
                />
              </div>
              <br />
              <div className="input-container">
                <input
                  placeholder="Keywords"
                  type="input"
                  class="form__field"
                  name="name"
                  id="description"
                  required
                />
              </div>
              <br />
              <label class="select-files">
                <input type="file" />
                Select Files
              </label>
              <br />
              <br /> <input type="submit" value="Upload" id="upload-button" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
