import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../../css/Dashboard.css";
import DashComp from "./DashComp";
import DashProjects from "./DashProjects";
import DashInvites from "./DashInvites";
import DashProfile from "./DashProfile";
import DashBlogs from "./DashBlogs";
import baseURL from "../../baseURL";

function Dashboard() {
  const history = useHistory();
  const [user, setuser] = useState({})
  const [r, setr] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      history.push("/user/login");
      toast.warn("You must be logged in !");
    }
    fetch(`${baseURL}/api/my/details`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
      });
  }, [r]);

  return (
    <div class="container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="true"
          >
            Profile
          </a>
          <a
            class="nav-item nav-link"
            id="nav-projects-tab"
            data-toggle="tab"
            href="#nav-projects"
            role="tab"
            aria-controls="nav-projects"
            aria-selected="false"
          >
            Projects
          </a>
          <a
            class="nav-item nav-link"
            id="nav-invites-tab"
            data-toggle="tab"
            href="#nav-invites"
            role="tab"
            aria-controls="nav-invites"
            aria-selected="false"
          >
            Invites
          </a>
          <a
            class="nav-item nav-link"
            id="nav-components-tab"
            data-toggle="tab"
            href="#nav-components"
            role="tab"
            aria-controls="nav-components"
            aria-selected="false"
          >
            Components
          </a>
          <a
            class="nav-item nav-link"
            id="nav-blogs-tab"
            data-toggle="tab"
            href="#nav-blogs"
            role="tab"
            aria-controls="nav-blogs"
            aria-selected="false"
          >
            Blogs
          </a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <DashProfile user={user} setUser={setuser} />
        </div>
        <div
          class="tab-pane fade"
          id="nav-projects"
          role="tabpanel"
          aria-labelledby="nav-projects-tab"
        >
          <DashProjects user={user} r={r} setr={setr} />
        </div>
        <div
          class="tab-pane fade"
          id="nav-invites"
          role="tabpanel"
          aria-labelledby="nav-invites-tab"
        >
          <DashInvites user={user} r={r} setr={setr} />
        </div>
        <div
          class="tab-pane fade"
          id="nav-components"
          role="tabpanel"
          aria-labelledby="nav-components-tab"
        >
          <DashComp r={r} setr={setr} />
        </div>
        <div
          class="tab-pane fade"
          id="nav-blogs"
          role="tabpanel"
          aria-labelledby="nav-blogs-tab"
        >
          <DashBlogs user={user} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
