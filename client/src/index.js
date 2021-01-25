import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.js';
import Particles from 'react-particles-js'

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 2000
      }
    }
  }
}

<<<<<<< HEAD


=======
>>>>>>> b5a38902e2628cc4bea0ef673ea19412855f1273
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Particles className='particles'
        params={particlesOptions} />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
