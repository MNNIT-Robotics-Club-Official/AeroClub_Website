import React, { useEffect } from "react";
import Navigbar from "./components/utils/Navigbar.js";
import Footer from "./components/utils/Footer.js";
import Home from "./components/utils/Home.js";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import AdminComp from "./components/admin/AdminComp.js";
import Landing from "./Animations/Landing.js";
import Gallery from "./components/Pages/Gallery.js";
import Alumni from "./components/Pages/Alumni.js";
import Featuredproject from "./components/utils/featured-proj";
import Testimonials from "./components/utils/Testimonials";
import Login from "./components/Pages/Login";
import Projects from "./components/Pages/Project";
import SingleProject from "./components/Pages/SingleProject";
import Blogs from "./components/Pages/Blogs";
import SingleBlog from "./components/Pages/SingleBlog";
import Signup from "./components/Pages/Signup";
import EventHome from "./Animations/EventsHome";
import CompIssue from "./components/CompIssue";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "./components/Pages/ForgetPassword";
import PasswordReset from "./components/Pages/PasswordReset.js";
import Dashboard from "./components/Pages/Dashboard.js";
import Confirmation from "./components/Pages/Confirmation.js";
import NotFound from "./components/Pages/NotFound.js";
import News from "./components/Pages/News.js";
import CreateBlog from "./components/Pages/CreateBlog.js";
import Events from "./components/Pages/Events";
import Workshop from "./components/Pages/Workshop";
import { baseTitle } from "./baseUtils.js";
import About from "./components/utils/About";
import ContactUs from "./components/utils/ContactUs.js";
import Faculty from "./components/Pages/Faculty.js";
import Coordinators from "./components/Pages/Coordinators.js";
import Nontech from "./components/Pages/Nontech.js";
import { useContext } from "react";
import { UserContext } from "./UserProvider.js";

function App() {
  document.title = `${baseTitle}`;
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "SET", payload: user });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <ToastContainer
          autoClose={4000}
          hideProgressBar={true}
          pauseOnHover
          closeOnClick
        />
        <Switch>
          {localStorage.getItem("jwtToken") && (
            <Route path="/admin" exact>
              <AdminComp />
            </Route>
          )}

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
          <Route path="/user/forgotpassword" exact>
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
                <Landing />
                <About />
                <EventHome />
                <Featuredproject />
                <Testimonials />
                <ContactUs />
              </Route>
              <Route path="/gallery" exact>
                <Gallery />
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
              <Route path="/faculty" exact>
                <Faculty />
              </Route>
              <Route path="/coordinators" exact>
                <Coordinators />
              </Route>
              <Route path="/non-tech" exact>
                <Nontech />
              </Route>
              <Route path="/projects" exact>
                <Projects />
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
              <Route path="/components" exact>
                <CompIssue />
              </Route>
              <Route path="/news" exact>
                <News />
              </Route>
              <Route path="/events" exact>
                <Events />
              </Route>
              <Route path="/workshop" exact>
                <Workshop />
              </Route>
              <Route>
                <Redirect to="/404" />
              </Route>
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
