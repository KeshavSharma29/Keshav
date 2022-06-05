import React, { Component } from "react";
import "./Navbar2.css";
import {
  Navbar,
  Nav,
  DropdownButton,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import "../Gloria-logo.png";
import "../profile-logo.png";
import { GoPerson } from "react-icons/go";

class Navbar2 extends Component {
  render() {
    return (
      <Navbar expand="md" className="py-3">
        <Navbar.Brand id="navbar-brand">
          <img src={require("../Gloria-logo.png")} id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle class="toggle-burger" />
        <Navbar.Collapse id="center">
          <Nav className="me-auto ms-auto my-navbar-buttons justify-content-evenly">
            <Nav.Link href="#home" style={{ color: "#3A69CD" }} id="active">
              Home
            </Nav.Link>
            <Nav.Link href="#search" style={{ color: "#3A69CD" }}>
              Search
            </Nav.Link>
            <Nav.Link href="#upload" style={{ color: "#3A69CD" }}>
              Upload
            </Nav.Link>
            <Nav.Link href="#about-us" style={{ color: "#3A69CD" }}>
              About Us
            </Nav.Link>
            <Nav.Link
              href="#profile"
              style={{ color: "#3A69CD" }}
              id="profile-logo-div"
            >
              <GoPerson size="1.4em" id="profile-logo" />
            </Nav.Link>
            <NavDropdown id="dropdown">
              <NavDropdown.Item href="#action3" className="dropdown-list">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="dropdown-list">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className="dropdown-list">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar2;
