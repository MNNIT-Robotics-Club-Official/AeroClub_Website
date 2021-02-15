import { Button, Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import "../../css/navbar.css";
import { useHistory } from "react-router-dom";
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
          <Dropdown className="pad right-btn">
            <Dropdown.Toggle id="dropdown-basic" className='mr-sm-2 my-2' size='lg'>
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/user/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          :
          <Button className="mr-sm-2 my-2 right-btn" href='/user/login' size='lg'>Login</Button>
      }
    </>
  )
}

export default function Navigbar() {

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  let prevScrollpos = window.pageYOffset

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="style top-bottom" id='navbar'>
        <Navbar.Brand href="/" className="title"><img src={`${baseURL}/images/utils/circle-cropped.png`} style={{ height: 50, marginRight: 5, marginLeft: 8 }} />AERO CLUB MNNIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey='blogs' href='/blogs' className='nav-items'>Blogs</Nav.Link>
            <Nav.Link eventKey='blogs' href='/projects' className='nav-items'>Projects</Nav.Link>
            <Nav.Link eventKey='blogs' href='/alumni' className='nav-items'>Our Team</Nav.Link>
            <Nav.Link eventKey='blogs' href='/events' className='nav-items'>Events</Nav.Link>
            <Nav.Link eventKey='blogs' href='/workshop' className='nav-items'>Jigyasa</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="pad">
              <NavDropdown.Item eventKey='members' href='/gallery'>Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/news" eventKey='news'>News Section</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://tsaw.tech/" eventKey='startups'>Our StartUps</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Login />

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}