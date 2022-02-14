import React, { useEffect } from "react";
import Loading from "../../../Animations/Loading";
import "../../../css/Alumni.css";                
import MainCard from "./AlumniMainCard";
import { REACT_APP_BASE_TITLE } from "../../../grobalVars"
import { animateScroll } from "react-scroll";

export default function Alumni() {
  useEffect(() => {
    document.title = `Alumni | ${REACT_APP_BASE_TITLE}`;
    animateScroll.scrollToTop()
  }, [])



  return (
    <>
      <Loading time={1} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>OUR ALUMNI</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      >
        
      </div>
      <div className="container alumni-container my-5 col-11" style={{ minHeight: '24rem' }}>
         <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>
        <MainCard year = {2021}/>
        <MainCard year = {2020}/>
        <MainCard year = {2019}/>
        <MainCard year = {2018}/>
        </div>
    

          

       
      <br />
      <br />

    </>
  );
}
