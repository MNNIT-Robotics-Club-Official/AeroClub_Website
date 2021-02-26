import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import UserProvider from "./UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
