import React from "react";
import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminComp from "./components/admin/AdminComp.js";
import ImgSlider from './Animations/ImgSlider.js';
import Gallery from './components/Pages/Gallery.js';
import Alumni from './components/Pages/Alumni.js';
import Featuredproject from './components/featured-proj';
import Testimonials from './components/Testimonials';
import Contactus from './components/ContactUs';
import Login from "./components/Pages/Login";
import Projects from "./components/Pages/Project";
import SingleProject from "./components/Pages/SingleProject";
import Blogs from "./components/Pages/Blogs";
import SingleBlog from "./components/Pages/SingleBlog";
import Signup from "./components/Pages/Signup";
import EventHome from "./Animations/EventsHome";
import CompIssue from "./components/CompIssue";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgetPassword from "./components/Pages/ForgetPassword";
import PasswordReset from "./components/Pages/PasswordReset.js";
import Dashboard from "./components/Pages/Dashboard.js";
import Confirmation from "./components/Pages/Confirmation.js";
import NotFound from "./components/Pages/NotFound.js";
import News from "./components/Pages/News.js";
import CreateBlog from "./components/Pages/CreateBlog.js";
import Events from "./components/Pages/Events";

function App() {

  return (
    <div className="App" >
      <ToastContainer autoClose={4000} hideProgressBar={true} pauseOnHover closeOnClick />
      <Switch>
        {
          localStorage.getItem('jwtToken') &&
          <Route path='/admin' exact>
            <AdminComp />
          </Route>
        }

        <Route path='/user/login' exact>
          {
            !localStorage.getItem('jwtToken') ? <Login /> : <Redirect to='/404' />
          }
        </Route>
        <Route path='/user/signup' exact>
          {
            !localStorage.getItem('jwtToken') ? <Signup /> : <Redirect to='/404' />
          }
        </Route>
        <Route path='/user/confirm/:token' exact>
          {
            !localStorage.getItem('jwtToken') ? <Confirmation /> : <Redirect to='/404' />
          }
        </Route>
        <Route path='/user/resetpassword/:token' exact>
          {
            !localStorage.getItem('jwtToken') ? <PasswordReset /> : <Redirect to='/404' />
          }
        </Route>
        <Route path='/user/forgotpassword' exact>
          {
            !localStorage.getItem('jwtToken') ? <ForgetPassword /> : <Redirect to='/404' />
          }
        </Route>
        <Route path='/404' exact component={NotFound} />
        <Route>
          < Navigbar />
          <Switch>
            <Route path='/' exact>
              < Home />
              < ImgSlider />
              < Featuredproject />
              < Testimonials />
              < Contactus />
              < EventHome />
            </Route>
            <Route path='/gallery' exact>
              <Gallery />
            </Route>
            <Route path='/user/createblog' exact>
              <CreateBlog />
            </Route>
            <Route path='/user/dashboard' exact>
              <Dashboard />
            </Route>
            <Route path='/alumni' exact>
              <Alumni />
            </Route>
            <Route path='/projects' exact>
              <Projects />
            </Route>
            <Route path='/projects/:projectId' exact>
              <SingleProject />
            </Route>
            <Route path='/blogs' exact>
              <Blogs />
            </Route>
            <Route path='/blogs/:blogId' exact>
              <SingleBlog />
            </Route>
            <Route path='/components' exact>
              <CompIssue />
            </Route>
            <Route path='/news' exact>
              <News />
            </Route>
            <Route path='/events' exact>
              <Events />
            </Route>
            <Route >
              <Redirect to='/404' />
            </Route>
          </Switch>
          < Footer />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
