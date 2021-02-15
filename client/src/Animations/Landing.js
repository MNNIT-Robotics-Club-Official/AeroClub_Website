import React from "react";
import { baseURL } from "../baseUtils";
import '../css/Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="landing d-flex flex-lg-row flex-md-column align-items-center justify-content-center flex-wrap">
          <div className="landing-logo">
            <img src={`${baseURL}/images/utils/logo-aero2.png`} alt="aero" srcset="" />
          </div>
          <div className="landing-about">
            <h1 className='font-weight-bold'>AERODYNAMIX CLUB MNNIT</h1>
            <h2>MNNIT Allahabad</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing