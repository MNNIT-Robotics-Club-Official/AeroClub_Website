import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";

export default function Faculty() {
  document.title = "Faculty | Aero Club";

  return (
    <>
      <Loading time={2} />
      <div className=" pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Coordinators</div>
        </div>
      </div>
      <div className="mx-5">
        <div className="container-fluid mx-auto">
          <div className="d-flex my-auto justify-content-center align-items-center">
            <div class="container-fluid rounded border my-5">
              <div class="row">
                <div class="col-12 mt-3">
                  <div class="card">
                    <div class="faculty-container d-flex flex-column flex-md-row">
                      <img
                        className="ml-3 mr-md-5 rounded col-lg-4 col-md-6 col-sm-12 m-auto m-md-0"
                        src="../../images/gallery/faculty1.jpeg"
                        alt="Card image cap"
                      />
                      <div class="card-body col-lg-8 col-md-6 m-auto">
                        <h4 class="card-title text-">
                          Dr. Venkateswara Rao Komma (Faculty Incharge Technical
                          Activities, SAC)
                          <br />
                          Associate Professor, Department of Mechanical
                          Engineering
                        </h4>
                        <br />
                        <p class="card-text">
                          <strong>Qualifications : </strong>
                          <br />
                          PhD(IIT-ROORKEE) <br /> M.tech(IIT-ROORKEE) <br />
                          B.Tech <br />
                          <br />
                          <strong>Areas of interest : </strong>
                          <br />
                          Modeling and Simulation of Manufacturing Systems,
                          Agent-Based Manufacturing System (ABMS),
                          <br /> Integration CAD/M using STEP (Standard for
                          Exchange of Product Model Data),
                          <br /> Advanced Manufacturing Processes
                        </p>
                      </div>
                    </div>
                    <br />
                    <div className="my-4">
                      <p className="cent">
                        <a
                          class="btn btn-outline-dark btn-lg"
                          data-toggle="collapse"
                          href="#collapseExample1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample1"
                        >
                          Know More
                        </a>
                      </p>
                      <div className="collapse" id="collapseExample1">
                        <div className="content">
                          <div className="container">
                            <div className="row">
                              If you’re not making some notable mistakes along
                              the way, you’re certainly not taking enough
                              chances. Aeroclub and Astrowing of MNNIT are the
                              places where one not only learns but most
                              importantly makes mistakes. From building planes
                              and drones to understanding telescopes , from
                              viewing and analysing celestial spheres to
                              studying the mechanism of real life problems, the
                              students never fail to propose innovative ideas.
                              Under the umbrella of these clubs students have
                              not only built numerous projects but have created
                              a place for themselves by winning many events.
                              They've cultivated themselves to use resources in
                              advancement of the present day technology. I take
                              pride in being the faculty incharge of such
                              technical clubs where even failure is celebrated.
                              I wish them all the success, may they conquer
                              every kingdom they visit!
                              <br />
                              <br />
                              Contacts- Tel. +91-532-227-1521 (O) <br />
                              Email:kvrao@mnnit.ac.in
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
