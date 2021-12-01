import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IUser } from "../App";
import Logo from './logo.png'
import { UserContext } from "./user/UserContext";

function Navigation() {
const context = useContext(UserContext);
let jsxelement;
const history= useNavigate();

if(context.state.email===undefined){
  console.log('nessun utente');
  jsxelement=(<>
         <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/login">Login</NavLink></Nav.Link>
         <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/signup">Signup</NavLink></Nav.Link>
              </>)
} else{
  console.log('utente: ' +context.state.email);

  jsxelement=(<>
    <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/user">{context.state.email}</NavLink></Nav.Link>
    <Button onClick={()=>{context.setState({} as IUser);                           
           history('/climbing-blog/');}}>Logout</Button>
    </>)
}


  return (  
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/climbing-blog/"><img src={Logo} alt="" height="45px" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/">Home</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/about">About</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/contact">Contact</NavLink></Nav.Link>
      
    </Nav>
    <Nav>
      {jsxelement}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;

/**
 *   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/climbing-blog/">
                Home
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/climbing-blog/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/climbing-blog/signup">
               Signup
              </NavLink>
            </li>
          </ul>
    </div>
  </div>
</nav>
 * 
 * 
 * 
 * 
 
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