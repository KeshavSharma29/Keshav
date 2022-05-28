import React, { Component } from "react";
import "./Navbar.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import "../Gloria-logo.png";

class NavbarComp extends Component {
  render() {
    return (
      <Navbar expand="md" className="py-3">
        <Navbar.Brand id="navbar-brand">
          <img src={require("../Gloria-logo.png")} id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle class="toggle-burger" />
        <Navbar.Collapse>
          <Nav className="me-auto ms-auto my-navbar-buttons justify-content-evenly">
            <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "#3A69CD" }} id="active">
              Login
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
              Search
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
              Upload
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComp;
