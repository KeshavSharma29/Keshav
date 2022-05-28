import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div>
        <NavbarComp />
      </div>
      <div class="fill-window">
        <Login />
      </div>
    </div>
  );
}

export default App;
