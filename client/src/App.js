import React from "react";
import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { Route, Switch } from 'react-router-dom';
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
import Loading from "./Animations/Loading.js";
import CompIssue from "./components/CompIssue";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgetPassword from "./components/Pages/ForgetPassword";
import PasswordReset from "./components/Pages/PasswordReset.js";
import Dashboard from "./components/Pages/Dashboard.js";
import Confirmation from "./components/Pages/Confirmation.js";

function App() {

  return (
    <div className="App" >
      <ToastContainer autoClose={4000} hideProgressBar={true} pauseOnHover closeOnClick />
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
        <Route path='/user/confirm/:token' exact>
          <Confirmation />
        </Route>
        <Route path='/user/forgotpassword' exact>
          <ForgetPassword />
        </Route>
        <Route path='/user/resetpassword/:token' exact>
          <PasswordReset />
        </Route>

        <Route>
          < Navigbar />
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
          < Footer />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
