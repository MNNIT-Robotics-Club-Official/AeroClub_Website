import React from "react";

import Particles from "react-particles-js";

export default function NotFound() {
  document.title = "404 | Aero Club";

  const particlesOptions = {
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          value_area: 2000,
        },
      },
    },
  };

  return (
    
    <div >
    <Particles
        params={particlesOptions}
        style={{ height: "100%", width: "100%", background: "#5d4545" }}
      ></Particles>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          // height: "100vh",
          zIndex: 9999,
          position: "absolute",
          left: "0",
          right: "0",
          color: "black",
          // background: "#0f0f"
        }}
      >
        <h1 className="fw-bold text-center" >404 error ...!</h1>
        <p className="text-center" style={{ fontWeight: "bold" }}>
          The page you are looking for is not found ⚠
        </p>
        <a className="btn btn-danger" style={{alignItems:"center"}} href="/">
          Back to Home
        </a>
      </div>
      
    </div>
  );
}
