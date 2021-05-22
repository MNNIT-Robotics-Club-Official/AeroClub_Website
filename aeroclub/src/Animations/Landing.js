import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { animateScroll } from "react-scroll";
import "../css/Landing.css";
import { REACT_APP_BASE_TITLE } from "../grobalVars";
import m from "../images/utils/logo-aero2.png";
import Loading from "./Loading";

const Landing = () => {

  const { state } = useLocation()

  useEffect(() => {
    document.title = `${REACT_APP_BASE_TITLE}`
    if (!state?.scrollToRT)
      animateScroll.scrollToTop()
  }, [])

  return (
    <>
      <Loading time={1} />
      <div className="container-fluid">
        <div className="pagesl">
          <div className="landing d-flex align-items-center justify-content-start">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="landing-logo">
                <img src={m} alt="aero" srcSet="" />
              </div>
              <div className="landing-about">
                <h1 className="font-weight-bold text-uppercase">
                  AeroClub MNNIT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Landing;
