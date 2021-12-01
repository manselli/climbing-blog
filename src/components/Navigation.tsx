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

if(context.state===null){
  console.log('nessun utente');
  jsxelement=(<>
         <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/login">Login</NavLink></Nav.Link>
         <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/signup">Signup</NavLink></Nav.Link>
              </>)
} else{
  console.log('utente: ' +context.state.email);

  jsxelement=(<>
    <Nav.Link href="#features"><NavLink className="nav-link" to="/climbing-blog/user">{context.state.email}</NavLink></Nav.Link>
    <Button onClick={()=>{context.setState(null);                           
           window.location.href="/climbing-blog/";}}>Logout</Button>
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
