import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import icon from "../assets/images/icon.png";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={ScrollLink} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            <img src={icon} alt="Home" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={ScrollLink} to="features" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
              Features
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="trailer" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
              Trailer
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="download" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
              Download
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;