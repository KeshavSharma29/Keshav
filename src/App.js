import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import NavbarComp from "./components/NavbarComp";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <div class="fill-window">
        <Upload />
      </div>
    </div>
  );
}

export default App;
