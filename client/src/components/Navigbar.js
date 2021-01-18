import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React from "react";
import "../css/navbar.css"

export default function Navigbar() {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="style">
        <Navbar.Brand href="#home" className="title">AERO CLUB MNNIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
          <Button variant="danger" className="mr-sm-2 my-2">Donate</Button>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 my-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}