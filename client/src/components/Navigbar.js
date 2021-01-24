import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React from "react";
import "../css/navbar.css";
import logo from "./circle-cropped.png";
import { Link } from "react-router-dom";

export default function Navigbar() {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="style top-bottom">
        {/* <Navbar className="top-bottom" expand="lg"> */}
        <Navbar.Brand href="/" className="title"><a><img src={logo} style={{ height: 50, marginRight: 5, marginLeft: 8 }} />AERO CLUB MNNIT</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/blogs" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Blogs</Link></Nav.Link>
            <Nav.Link ><Link to="/gallery" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></Nav.Link>
            <Nav.Link ><Link to="/" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Project</Link></Nav.Link>
            <Nav.Link ><Link to="/alumni" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Alumni</Link></Nav.Link>
            <NavDropdown title="Events" id="basic-nav-dropdown" className="pad">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://tsaw.tech/" style={{ paddingLeft: '10px' }}>Our StartUps</Nav.Link>
          </Nav>
          <p className="bt"><Button href="#link4" variant="light" className="mr-sm-2 my-2">Sponsorship</Button></p>
          <p className="bt"><Button href="/user/login" variant="info" className="mr-sm-2 my-2">Login</Button></p>
        </Navbar.Collapse>
        {/* </Navbar> */}
      </Navbar>
    </>
  );
}