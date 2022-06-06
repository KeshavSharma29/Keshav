import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Navbar2 from "./components/Navbar2";
import NavbarComp from "./components/NavbarComp";
import Upload from "./components/Upload";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
