import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Event.css";
import pro from "../../images/utils/Prosangnew.png";
import Daksha from "../../images/Events/Daksha.jpg"
import Smarthome from "../../images/Events/Smarthome.jpg"
import Guardian from "../../images/Events/Guardian.jpg"
import Blueprint from "../../images/Events/Blueprint.jpg"
import Idea from "../../images/Events/Idea.jpg"
import CodeWarz from "../../images/Events/CodeWarz.jpg"
import { Jumbotron, NavDropdown } from "react-bootstrap";

export default function Avishkar() {
    document.title = "Prosang | Aero Club";

    return (
        <>
            <Loading time={2} />
            <section className="section1 pagese ">
                <div className="overlaye">
                    <div className="containere ">
                        <h1 className="titlee">
                            <div className="pageTitlee titleBolde">
                                {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                Prosang
                {/* </div> */}
                            </div>
                        </h1>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <div className="img imgev">
                                    <img
                                        src={pro}
                                        alt="prosang"
                                        srcset=""
                                        style={{ alignItems: "center" }}
                                    />
                                </div>
                            </div>
                            <div className="text-wrapper" style={{ border: "2px solid white", borderRadius: "10px", padding: "10px" }}>
                                <p className="texte">
                                    Prodyogiki Sangam, better known as Prosang is the annual
                                    Techfest of Robotics and Aeroclub of MNNIT. It is an
                                    initiative to bring together a talented and technically
                                    skilled group of people to showcase their scientific prowess
                                    in the form of actual projects as well as ideas in fun and
                                    challenging tech-based events.
                </p>
                                <p className="texte">
                                    It began with the efforts of the batch of 2019 with the basic
                                    need for helping students score the gap between industrial
                                    skill set requirements and our academics, and hence build
                                    projects that add value to their CVs, and motivate them to
                                    model solutions to real world problems.
                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className=" pagese">
                <div className="overlaye">
                
                    <div className="pageTitlee titleBolde">
                    <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div>
                        Prosang
                        
                            </div>
                            
                </div>
            </div> */}
            {/* <Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    {/* <div className="pageTitle titleBold">
                        AVISHKAR
                    </div> */}
                    {/* <div className="miniSep"></div> */}
                    <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24 phonev">
                        <div class="sm:w-2/3 sm:mr-10">
                            <div class="text">
                                {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
                                <h2 class="font-bold text-3xl my-4 sm:text-4xl">
                                    <span class="text-indigo-600 font-bold">About the Event</span>
                                </h2>
                                <div className="bgBox"
                                    style={{
                                        border: "3px solid rgb(204, 67, 67)",
                                        padding: "2px",
                                        borderRadius: "8px",
                                        margin: "2em",
                                        fontSize: "smaller"
                                    }}
                                >
                                    <div style={{ padding: "2px" }}>
                                        <p class="text-gray-700">
                                            Prodyogiki Sangam, better known as Prosang is the annual
                                            Techfest of Robotics and Aeroclub of MNNIT. It is an
                                            initiative to bring together a talented and technically
                                            skilled group of people to showcase their scientific
                                            prowess in the form of actual projects as well as ideas in
                                            fun and challenging tech-based events.
                    </p>
                                        <p class="text-gray-700">
                                            It began with the efforts of the batch of 2019 with the
                                            basic need for helping students score the gap between
                                            industrial skill set requirements and our academics, and
                                            hence build projects that add value to their CVs, and
                                            motivate them to model solutions to real world problems.
                    </p>
                                        {/* <p className="texte">
                                            Each year Prosang witnesses a number of talks from eminent
                                            people in Industry and Academia, cut throat competitions,
                                            project exhibitions and a number of enlightening workshops.
                                            The selected participants not only get to visit and experience
                                            the atmosphere in a National Institute of Technology, but also
                                            get to attend lectures from brilliant technocrats from around
                                            the nation, technical workshops, laboratory visits and much
                                            more. Moreover, the participants get an opportunity to grow
                                            amongst the ideas and creations of fellow participants from
                                            20+ colleges.
                    </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="cent">
                            <a
                                class="btn btn-outline-dark btn-lg"
                                data-toggle="collapse"
                                href="#collapseExample1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample1"
                            >
                                Prosang 2020
              </a>
                        </p>
                        {/* <div className="colarea"> */}
                        <div className="collapse colarea" id="collapseExample1">
                            <div className="content yearevent">
                                <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                                    <div class="sm:w-2/3 sm:mr-10">
                                        <div class="text">
                                            {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}

                                            <h3 class="font-bold text-3xl my-4 sm:text-4xl">
                                                <span class="text-indigo-300 font-bold">Theme</span>
                                            </h3>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>
                                            <h5 class="font-bold text-3xl my-4 sm:text-4xl">
                                                <span class="text-indigo-300 font-bold">Smart City</span>
                                            </h5>
                                            <div
                                                style={{
                                                    border: "2px solid rgb(29, 29, 29)",
                                                    padding: "10px",
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                <div style={{ padding: "2px" }}>
                                                    <p class="text-gray-700">
                                                        <h5 class="font-bold text-3xl my-4 sm:text-4xl">
                                                            <span class="text-indigo-300 font-bold">Speakers</span>
                                                        </h5>
                                                        <div
                                                            className="miniSep"
                                                            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)", width: "100%" }}
                                                        ></div>
                                                        <ul>
                                                            <li> <b>Mr. Sanjeev Sharma (CEO and Founder, Swaayatt Robots) </b><a href="https://www.linkedin.com/in/sanjeevsharmaiitr/"><i class="fab fa-linkedin fa-lg"></i></a></li>

                                                            <br></br>
                                                        Autonomous Vehicles in Indian Scenarios
                                                        <hr></hr>
                                                            <li><b>Dr. Vijay Kapoor (Founder, Delhi Astronomy Club, Bangalore Astronomy Club) </b><a href="https://www.linkedin.com/in/sanjeevsharmaiitr/"><i class="fab fa-linkedin fa-lg"></i></a></li><br></br>
                                                        Amateur Astronomy and Beyond
                                                        <hr></hr>
                                                            <li><b>Mr. Mani Tripathi (Head, Allahabad Smart City Project) </b><a href="https://www.linkedin.com/in/sanjeevsharmaiitr/"><i class="fab fa-linkedin fa-lg"></i></a><br></br><br></br>
                                                        What Does it Take to Build a Smart City</li>
                                                        </ul>
                                                    </p>

                                                </div>
                                            </div>
                                            <h3 class="font-bold text-3xl my-4 sm:text-4xl">
                                                <span class="text-indigo-300 font-bold">Other Events</span>
                                            </h3>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>
                                            <div>
                                                <p>

                                                    <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                        Workshops
                                                     </button>
                                                </p>

                                                <div class="collapse collapsews" id="collapseExample">
                                                    <div class="card card-body dropworkshop text-center" >
                                                        <p>IoT</p>
                                                        <p>Drone Automation</p>
                                                        <p>A Day in the world of Robotics</p>
                                                    </div>
                                                </div>





                                                <span><h6>Project Exhibition</h6>
                                                </span><br></br>
                                                <span><h6>Airshow by Vortex RC</h6>
                                                </span><br></br>
                                                <h6><span class="text-indigo-200">Stargazing workshop by Mr. Vijay Kapoor<b> </b>
                                                    <a href="https://www.linkedin.com/in/vjkapoor/?originalSubdomain=in"><i class="fab fa-linkedin fa-lg"></i></a>
                                                </span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <h3 class="font-bold text-3xl my-4 sm:text-4xl">
                                        <span class="text-indigo-300 font-bold">Competitions</span>
                                    </h3>
                                    <div
                                        className="miniSep"
                                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                    ></div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Smarthome} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Smart Home Challenge
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Home Automation event
                                                    <br></br><br></br>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1lZ52-Zt56yKYf-28XuDZmLrCuru3SLsx/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Daksha} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Daksha
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Manual Robotics event
                                                        <br></br><br></br>
                                                    </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1MNVtwqbi2iFL4v9_r4wPKolSgnihSuRt/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Guardian} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            Guardian
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        QuadCopter Frame construction and Flight Test</p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1gCVi-5_voxmHcBaYwQL1wMqe5N8-EhSa/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Blueprint} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            BluePrint
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                    Mechanical Design Competition
                                                    <br></br><br></br>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1HmXQ3XthYbb8crjRfPo2JJtu1BTgZYTb/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={CodeWarz} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Code Warz
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                    A coding event
                                                    <br></br><br></br>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/10OQ7vS8LOqicjDlRcM1_BY3ptCSYyFkP/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Idea} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Idea Presentation
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Innovative Ideas
                                                    <br></br><br></br>
                                                    </p>
                                                    
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1DrckPVCVbcXvsTWq186qF2ggVk0QKNui/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            {/* </Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    <div>
                        {/* <div className="pageTitle titleBold">
                            PROSANG
                        </div> */}
                        <div>
                            <p className="cent">
                                <a
                                    class="btn btn-outline-dark btn-lg"
                                    data-toggle="collapse"
                                    href="#collapseExample2"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample2"
                                >
                                    Prosang 2019
                </a>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card cardev">
                                                    <a
                                                        className="img-card"
                                                        href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                                                    >
                                                        <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                                                    </a>
                                                    <div className="card-content cardev-content">
                                                        <h4 className="card-title cardev-title">
                                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                                                {" "}
                                Bootstrap 3 Carousel FadeIn Out Effect
                              </a>
                                                        </h4>
                                                        <p className>
                                                            Tutorial to make a carousel bootstrap by adding
                                                            more wonderful effect fadein ...
                            </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a
                                                            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                                                            className="btn btn-link btn-block"
                                                        >
                                                            Read More
                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card cardev">
                                                    <a
                                                        className="img-card"
                                                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                                                    >
                                                        <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                                                    </a>
                                                    <div className="card-content cardev-content">
                                                        <h4 className="card-title cardev-title">
                                                            <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html">
                                                                {" "}
                                Material Design Responsive Menu
                              </a>
                                                        </h4>
                                                        <p className>
                                                            Material Design is a visual programming language
                                                            made by Google. Language programming...
                            </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a
                                                            href="https://codepen.io/wisnust10/full/ZWERZK/"
                                                            className="btn btn-link btn-block"
                                                        >
                                                            Read More
                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card cardev">
                                                    <a
                                                        className="img-card"
                                                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                                                    >
                                                        <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                                                    </a>
                                                    <div className="card-content cardev-content">
                                                        <h4 className="card-title cardev-title">
                                                            <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                                                5 Button Hover Animation Effects
                              </a>
                                                        </h4>
                                                        <p className>
                                                            tutorials button hover animation, although very
                                                            much a hover button is very beauti...
                            </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a
                                                            href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                                                            className="btn btn-link btn-block"
                                                        >
                                                            Read More
                            </a>
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
            </section>
        </>
    );
}
