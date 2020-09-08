import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import callIcon from "../assets/call-icon.png";
import Design from "../Design";
import Laser from "../Laser";
import Press from "../Press";
import Flex from "../Flex";
import Weld from "../Welding";

const NavBarMemu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="dark"
      className="navBar-bg"
    >
      <Navbar.Brand href="/" className="pl-md-2 logo-w-75">
        <img className="w-100" src={logo} alt="Serpentix Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="mr-md-3 pr-md-2 justify-content-between text-center"
        id="responsive-navbar-nav"
      >
        <Nav className="ml-auto">
          <Nav.Link href="/Design" className="text-dark">
            Design
          </Nav.Link>
          <Nav.Link href="/Laser" className="text-dark">
            Laser Cutting
          </Nav.Link>
          <Nav.Link href="/Press" className="text-dark">
            Metal Forming
          </Nav.Link>
          <Nav.Link href="Flex" className="text-dark">
            Machining
          </Nav.Link>
          <Nav.Link href="Weld" className="text-dark">
            Welding
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="tel:3202604416" className="text-dark pl-md-5">
            <img className="w-75 call-icon" src={callIcon} alt="call icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMemu;
