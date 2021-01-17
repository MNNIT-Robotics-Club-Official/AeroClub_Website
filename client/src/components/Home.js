import React from "react";
import "./home.css";
import Hometext from "./hometext.js";


export default function Navigbar() {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="jumbotron">
          <h1>
            < Hometext/>
          </h1>
          <p>...</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Fill in Contents</a></p>
        </div>
      </div>
    </>
  );
}