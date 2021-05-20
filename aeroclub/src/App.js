import loadable from '@loadable/component'
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminComp from "./components/admin/AdminComp.js";
import Alumni from "./components/Pages/Alumni.js";
import Login from "./components/Pages/Login";
import Projects from "./components/Pages/Project";
import SingleProject from "./components/Pages/SingleProject";
import Blogs from "./components/Pages/Blogs";
import SingleBlog from "./components/Pages/SingleBlog";
import Signup from "./components/Pages/Signup";
import Loading from './Animations/Loading'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "./components/Pages/ForgetPassword";
import PasswordReset from "./components/Pages/PasswordReset.js";
import Dashboard from "./components/Pages/Dashboard";
import Confirmation from "./components/Pages/Confirmation.js";
import NotFound from "./components/Pages/NotFound.js";
import News from "./components/Pages/News.js";
import CreateBlog from "./components/Pages/Dashboard/Blogs/CreateBlog.js";
import Avishkar from "./components/Pages/Avishkar";
import Prosang from "./components/Pages/Prosang";
import Workshop from "./components/Pages/Workshop";
import Achievements from "./components/Pages/Achievements.js";
import Collaboration from "./components/Pages/Collaboration.js";
import Spinoff from "./components/Pages/Spinoff.js";
import Coordinators from "./components/Pages/Coordinators.js";
import WebTeam from "./components/Pages/WebTeam.js";
import Nontech from "./components/Pages/Nontech.js";
import Sponsors from "./components/Pages/Sponsor";
import Faculty from "./components/Pages/Faculty.js";
import FeaturedProjects from "./components/Pages/FeaturedProjects.js";
import './css/Eventhome.css'
const Navigbar = loadable(() => import("./components/utils/Navigbar.js"));
const About = loadable(() => import("./components/utils/About"));
const Footer = loadable(() => import("./components/utils/Footer.js"));
const Sponsorhome = loadable(() => import("./components/utils/Sponsorhome"));
const ContactUs = loadable(() => import("./components/utils/ContactUs.js"));
const SharedProj = loadable(() => import("./components/Pages/SharedProj.js"));
const Landing = loadable(() => import("./Animations/Landing.js"));
const Testimonials = loadable(() => import("./components/utils/Testimonials"));
const Featuredproject = loadable(() => import("./components/utils/featured-proj"));
const ResearchThemes = loadable(() => import("./components/utils/ResearchThemes.js"));

function App() {

  useEffect(() => {
    const { hash } = window.location;
    if (hash !== "") {
      let id = hash.replace("#/", "");
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="App">
      <ToastContainer
        autoClose={4000}
        hideProgressBar={true}
        pauseOnHover
        closeOnClick
      />
      <Switch>
        <Route path="/76564a9c-4842-49ce-83a4-a0eb4a54c382/admin" exact>
          {localStorage.getItem("jwtToken") ? (
            <AdminComp />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/login" exact>
          {!localStorage.getItem("jwtToken") ? (
            <Login />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/signup" exact>
          {!localStorage.getItem("jwtToken") ? (
            <Signup />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/confirm/:token" exact>
          {!localStorage.getItem("jwtToken") ? (
            <Confirmation />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/resetpassword/:token" exact>
          {!localStorage.getItem("jwtToken") ? (
            <PasswordReset />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/user/forgetpassword" exact>
          {!localStorage.getItem("jwtToken") ? (
            <ForgetPassword />
          ) : (
            <Redirect to="/404" />
          )}
        </Route>
        <Route path="/404" exact component={NotFound} />
        <Route>
          <Navigbar />
          <Switch>
            <Route path="/" exact>
              <Loading time={1} />
              <Landing />
              <About />
              <Featuredproject />
              <ResearchThemes />
              <Testimonials />
              <Sponsorhome />
              <ContactUs />
            </Route>
            <Route path="/spinoff" exact>
              <Spinoff />
            </Route>
            <Route path="/sharedProject/:shareId" exact>
              <SharedProj />
            </Route>
            <Route path="/user/createblog" exact>
              <CreateBlog />
            </Route>
            <Route path="/user/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/alumni" exact>
              <Alumni />
            </Route>
            <Route path="/achievements" exact>
              <Achievements />
            </Route>
            <Route path="/faculty" exact>
              <Faculty />
            </Route>
            <Route path="/coordinators" exact>
              <Coordinators />
            </Route>
            <Route path="/non-tech" exact>
              <Nontech />
            </Route>
            <Route path="/webteam" exact>
              <WebTeam />
            </Route>
            <Route path="/collaborate" exact>
              <Collaboration />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/projects/featured" exact>
              <FeaturedProjects />
            </Route>
            <Route path="/projects/:projectId" exact>
              <SingleProject />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/blogs/:blogId" exact>
              <SingleBlog />
            </Route>
            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/avishkar" exact>
              <Avishkar />
            </Route>
            <Route path="/prosang" exact>
              <Prosang />
            </Route>
            <Route path="/workshop" exact>
              <Workshop />
            </Route>
            <Route path="/sponsors" exact>
              <Sponsors />
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
