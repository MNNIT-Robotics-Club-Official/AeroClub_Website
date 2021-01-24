import React from "react";
import "./css/App.css";
import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { Route, Switch } from 'react-router-dom'
import AdminComp from "./components/admin/AdminComp.js";
import ImgSlider from './Animations/ImgSlider.js';
import Gallery from './components/Pages/Gallery.js';
import Alumni from './components/Pages/Alumni.js';
import Featuredproject from './components/featured-proj';
import Testimonials from './components/Testimonials';
import Login from "./components/Pages/Login";
import Blogs from "./components/Pages/Blogs";
import SingleBlog from "./components/Pages/SingleBlog";
import Signup from "./components/Pages/Signup";
import Particles from 'react-particles-js'

function App() {

  const particlesOptions = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 2000
        }
      }
    }
  }

  return (
    <div className="App" >
      <Switch>
        <Route path='/admin' exact>
          <AdminComp />
        </Route>
        <Route path='/user/login' exact>
          <Login />
        </Route>
        <Route path='/user/signup' exact>
          <Signup />
        </Route>
        <Route>
          <Particles className='particles'
            params={particlesOptions} />
          < Navigbar />
          <Route path='/' exact>
            < Home />
            < ImgSlider />
            < Featuredproject />
            < Testimonials />
          </Route>
          <Route path='/gallery' exact>
            <Gallery />
          </Route>
          <Route path='/alumni' exact>
            <Alumni />
          </Route>
          <Route path='/blogs' exact>
            <Blogs />
          </Route>
          <Route path='/blogs/:blogId' exact>
            <SingleBlog />
          </Route>
          < Footer />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
