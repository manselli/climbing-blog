import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="nav-link" to="/climbing-blog/">Home</NavLink>
      <NavLink className="nav-link" to="/climbing-blog/about">About</NavLink>
      <NavLink className="nav-link" to="/climbing-blog/contact">Contact</NavLink>
    </Nav>
    <Nav>
      <NavLink className="nav-link" to="/climbing-blog/login">Login</NavLink>
      <NavLink className="nav-link" to="/climbing-blog/signup">Signup</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;

/**
 
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/climbing-blog/">
            React Multi-Page Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/climbing-blog/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/climbing-blog/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/climbing-blog/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
 */