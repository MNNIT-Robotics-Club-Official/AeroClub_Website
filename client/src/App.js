
import './App.css';

import React from "react";

import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import ImgSlider from './Animations/ImgSlider.js';


function App() {
  return (
    <div className="App" >
      <>
        < Navigbar />
      </>

      <>
        < Home />
      </>

      <>
        < ImgSlider />
      </>

      {/* Site footer */}
      <>
        < Footer />
      </>

    </div>
  );
}

export default App;
