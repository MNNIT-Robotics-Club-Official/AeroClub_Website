import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import { baseTitle } from '../../baseUtils'


export default function Alumni() {

    document.title = `${baseTitle} | Our Members`

    return (
        <>
            <Loading time={2} />
            <div className="pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">
                        Our Alumni
                    </div>
                </div>
            </div>
            {/* <div className="pageTitle titleBold header white-heading padtop">ALUMNI</div> */}

            <div class="container alumni-container mb-5">
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    Batch 2020 ( current )
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse show">
                            <div class="panel-body">
                                <div className="container">
                                    <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                                        {
                                            [1, 2, 3, 4, 5, 5, 6].map((i, e) => (
                                                <div class="card card-item shadow" style={{ width: "15rem" }}>
                                                    <img class="card-img-top" src="https://images.unsplash.com/photo-1610903953576-fc21d18d83d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="Card image cap" />
                                                    <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                                                        <h5 class="card-title text-center">Bhuvan Jhumb</h5>
                                                        <p class="card-text text-center">Final year, Mechanical Engineering</p>
                                                        <a href="#" class="btn btn-danger mx-auto">Know More</a>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    Batch 2019
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body">
                                <div className="container">
                                    <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                                        {
                                            [1, 2, 3, 4, 5, 5, 6].map((i, e) => (
                                                <div class="card card-item shadow" style={{ width: "15rem" }}>
                                                    <img class="card-img-top" src="https://images.unsplash.com/photo-1610903953576-fc21d18d83d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="Card image cap" />
                                                    <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                                                        <h5 class="card-title text-center">Bhuvan Jhumb</h5>
                                                        <p class="card-text text-center">Final year, Mechanical Engineering</p>
                                                        <a href="#" class="btn btn-danger mx-auto">Know More</a>
                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                    Batch 2018
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                            <div class="panel-body">
                                <div className="container">
                                    <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                                        {
                                            [1, 2, 3, 4, 5, 5, 6].map((i, e) => (
                                                <div class="card card-item shadow" style={{ width: "15rem" }}>
                                                    <img class="card-img-top" src="https://images.unsplash.com/photo-1610903953576-fc21d18d83d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="Card image cap" />
                                                    <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                                                        <h5 class="card-title text-center">Bhuvan Jhumb</h5>
                                                        <p class="card-text text-center">Final year, Mechanical Engineering</p>
                                                        <a href="#" class="btn btn-danger mx-auto">Know More</a>
                                                    </div>
                                                </div>
                                            ))
                                        }
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