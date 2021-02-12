import { Button, Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useState } from "react";
import "../../css/navbar.css";
import logo from "../../images/utils/circle-cropped.png";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { baseURL } from '../../baseUtils';

const Login = () => {

  const history = useHistory()
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwtToken') ? true : false)

  const handleLogout = () => {
    fetch(`${baseURL}/api/signout`, {
      method: 'post'
    }).then(res => res.json())
      .then(data => {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('role')
        setLoggedIn(false)
        toast.success(data.message)
        history.push('/')
        window.location.reload()
      })
  }

  return (
    <>
      {
        loggedIn ?
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='mr-sm-2 my-2'>
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/user/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          // <DropdownButton title='Profile' variant='info' className="mr-sm-2 my-2">
          //   <NavDropdown.Item href="/user/dashboard">Dashboard</NavDropdown.Item>
          //   <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          // </DropdownButton>
          :
          <p className="bt"><Button variant="info" className="mr-sm-2 my-2"><Link to="/user/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link></Button></p>
      }
    </>
  )
}

export default function Navigbar() {

  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="style top-bottom">
        <Navbar.Brand href="/" className="title"><a><img src={logo} style={{ height: 50, marginRight: 5, marginLeft: 8 }} />AERO CLUB MNNIT</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey='blogs'><Link to="/blogs" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Blogs</Link></Nav.Link>
            <Nav.Link eventKey='gallery'><Link to="/gallery" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></Nav.Link>
            <Nav.Link eventKey='projects'><Link to="/projects" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</Link></Nav.Link>
            <Nav.Link eventKey='events'><Link to="/events" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Events</Link></Nav.Link>
            {/* <NavDropdown title="Events" id="basic-nav-dropdown" className="pad">
              <NavDropdown.Item href="#action/3.3">AVISHKAR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">PROSANG</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link eventKey='workshop'><Link to="/workshop" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Workshops</Link></Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="pad">
              <NavDropdown.Item eventKey='members'><Link to="/alumni" style={{ color: 'inherit', textDecoration: 'none' }}>Our Members</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/news" eventKey='news'>News Section</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://tsaw.tech/" eventKey='startups'>Our StartUps</NavDropdown.Item>
            </NavDropdown>
<<<<<<< HEAD
            <Nav.Link><Link to="/workshop" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Workshops</Link></Nav.Link>
=======
>>>>>>> 70837eb501da4ea41fa752c4976f5a43e699791b
            {/* <Nav.Link><Scroll
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              className="pad"
              style={{ color: 'inherit', textDecoration: 'none' }}
            > Contact
            </Scroll></Nav.Link> */}
            {/* <Nav.Link href="https://tsaw.tech/"><span className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Our StartUps</span></Nav.Link> */}
          </Nav>
          <Login />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}