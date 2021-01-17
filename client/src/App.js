
import './App.css';

import React from "react";

import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';

import { Modal, Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App" >
      <>
        < Navigbar />
      </>

      <>
        < Home />
      </>


      {/* Site footer */}
      <>
        < Footer />
      </>

    </div>
  );
}

export default App;
