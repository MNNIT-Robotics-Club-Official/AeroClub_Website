import React from "react";

// import Particles from "react-particles-js";

export default function NotFound() {
  document.title = "404 | Aero Club";

  // const particlesOptions = {
  //   particles: {
  //     number: {
  //       value: 150,
  //       density: {
  //         enable: true,
  //         value_area: 2000
  //       }
  //     }
  //   }
  // }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="fw-bold">404 error ...!</h1>
      <p>The page you are looking for is not found</p>
      <a className="btn btn-danger" href="/">
        Back to Home
      </a>
    </div>
  );
}
