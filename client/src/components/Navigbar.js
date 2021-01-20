import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React from "react";
import "../css/navbar.css";


import {Link } from "react-router-dom";


export default function Navigbar(props) {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="style">
        <Navbar.Brand href="#home" className="title">AERO CLUB MNNIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></Nav.Link>
            <Nav.Link href="#link1">Blogs</Nav.Link>
            <Nav.Link ><Link to="/Gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></Nav.Link>
            <Nav.Link href="#link2">Projects</Nav.Link>
            <Nav.Link ><Link to="/Alumni" style={{ color: 'inherit', textDecoration: 'none' }}>Alumni</Link></Nav.Link>
            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://tsaw.tech/">Our StartUps</Nav.Link>
          </Nav>
          <Button href="#link4" variant="dark" className="mr-sm-2 my-2">Sponsorship</Button>
          <Button href="#link5" variant="info" className="mr-sm-2 my-2">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}