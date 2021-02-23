import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Event.css";
import { baseTitle } from "../../baseUtils";
import { baseURL } from "../../baseUtils";

export default function Avishkar() {

    document.title = `${baseTitle} | Events`

    return (
        <>
            <Loading />
            <section className="section1 pagese ">
                <div className="overlaye">
                    <div className="containere ">
                        <h1 className="titlee"><div className="pageTitlee titleBolde">
                            {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                        Avishkar

                            {/* </div> */}

                        </div></h1>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <div className="img imgev" ><img src={`${baseURL}/images/utils/avishkar.png`} alt="prosang" srcset="" style={{ alignItems: 'center' }} /></div>
                            </div>
                            <div className="text-wrapper">
                                <p className="texte">MNNIT's techno management festival Avishkar is held every year in the month of September. Equipped with technical and managerial events, Avishkar is the best platform for students to learn and build their CVs. With the teaching classes starting almost a month before the D-day, and being mentored by extremely capable seniors, it is indeed an opportunity for students to hone their skills and build a good network. Avishkar and Gnotalks go hand in hand and one is exposed to great personalities' heart touching and inspirational struggles and their journey.
                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className=" pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">
                        Avishkar
                            </div>
                </div>
            </div> */}
            {/* <Jumbotron> */}
            <section className="wrapper">
                <div className="container-fostrap">
                    {/* <div className="pageTitle titleBold">
                        AVISHKAR
                    </div> */}
                    {/* <div className="miniSep"></div> */}
                    <div class="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24 phonev">
                        <div class="sm:w-2/3 sm:mr-10">
                            <div class="text">
                                {/* <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
                                <h2 class="font-bold text-3xl my-4 sm:text-4xl"><span class="text-indigo-600 font-bold">About the Event</span></h2>
                                <div style={{border:'2px solid rgb(29, 29, 29)', padding:'2px', borderRadius:'8px'}}>
                                <div style={{padding:'2px'}}>
                                <p class="text-gray-700">MNNIT's techno management festival Avishkar is held every year in the month of September. Equipped with technical and managerial events, Avishkar is the best platform for students to learn and build their CVs. With the teaching classes starting almost a month before the D-day, and being mentored by extremely capable seniors, it is indeed an opportunity for students to hone their skills and build a good network. Avishkar and Gnotalks go hand in hand and one is exposed to great personalities' heart touching and inspirational struggles and their journey.</p>
                                
                                </div></div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <p className="cent">
                            <a class="btn btn-outline-dark btn-lg" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                                Avishkar 2020
                    </a>

                        </p>
                        <div className="collapse" id="collapseExample1">
                            <div className="content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                <a className="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                                                </a>
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> Bootstrap 3 Carousel FadeIn Out Effect
                                                </a>
                                                    </h4>
                                                    <p className>
                                                        Tutorial to make a carousel bootstrap by adding more wonderful effect fadein ...
                                            </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                                        Read More
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                <a className="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                                    <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                                                </a>
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html"> Material Design Responsive Menu
                                                </a>
                                                    </h4>
                                                    <p className>
                                                        Material Design is a visual programming language made by Google. Language programming...
                                            </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a href="https://codepen.io/wisnust10/full/ZWERZK/" className="btn btn-link btn-block">
                                                        Read More
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                <a className="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                                    <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                                                </a>
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">5  Button Hover Animation Effects
                                                </a>
                                                    </h4>
                                                    <p className>
                                                        tutorials button hover animation, although very much a hover button is very beauti...
                                            </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" className="btn btn-link btn-block">
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
            </section>
            {/* </Jumbotron> */}
            <section className="wrapper">
                <div className="container-fostrap">
                    <div>

                        {/* <div className="pageTitle titleBold">
                            PROSANG
                        </div> */}
                        <div >
                            <p className="cent">
                                <a class="btn btn-outline-dark btn-lg" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                    Avishkar 2019
                    </a>

                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card cardev">
                                                    <a className="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                                        <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                                                    </a>
                                                    <div className="card-content cardev-content">
                                                        <h4 className="card-title cardev-title">
                                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> Bootstrap 3 Carousel FadeIn Out Effect
                                                </a>
                                                        </h4>
                                                        <p className>
                                                            Tutorial to make a carousel bootstrap by adding more wonderful effect fadein ...
                                            </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                                            Read More
                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card cardev">
                                                    <a className="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                                        <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                                                    </a>
                                                    <div className="card-content cardev-content">
                                                        <h4 className="card-title cardev-title">
                                                            <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html"> Material Design Responsive Menu
                                                </a>
                                                        </h4>
                                                        <p className>
                                                            Material Design is a visual programming language made by Google. Language programming...
                                            </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a href="https://codepen.io/wisnust10/full/ZWERZK/" className="btn btn-link btn-block">
                                                            Read More
                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card cardev">
                                                    <a className="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                                        <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                                                    </a>
                                                    <div className="card-content cardev-content">
                                                        <h4 className="card-title cardev-title">
                                                            <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">5  Button Hover Animation Effects
                                                </a>
                                                        </h4>
                                                        <p className>
                                                            tutorials button hover animation, although very much a hover button is very beauti...
                                            </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" className="btn btn-link btn-block">
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