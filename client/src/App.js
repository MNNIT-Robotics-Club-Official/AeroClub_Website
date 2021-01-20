import React from "react";
import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { Route, Switch } from 'react-router-dom'
import { Modal, Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AdminComp from "./components/admin/AdminComp.js";
import ImgSlider from './Animations/ImgSlider.js';
import Gallery from './components/Pages/Gallery.js';
import Alumni from './components/Pages/Alumni.js';

function App() {
  return (
    <div className="App" >
      <Switch>

        <Route path='/admin' exact>
          <AdminComp />
        </Route>

        <Route>
          < Navigbar />
          <Route path='/' exact>

            < Home />
            < ImgSlider />

          </Route>
          <Route path='/Gallery' exact>
            <Gallery />
          </Route>
          <Route path='/Alumni' exact>
            <Alumni />
          </Route>
          < Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
