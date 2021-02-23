import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import UserProvider from "./UserProvider";
// import Particles from 'react-particles-js'

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

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
