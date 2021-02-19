import React from 'react'
import Loading from '../../Animations/Loading'
import '../../css/Alumni.css'

export default function Nontech() {
    return (
        <>
            <Loading />
            <div className="pagesa">
                <div className="overlaya">
                    <div className="pageTitlea titleBolda">
                        Non-Tech Members
                    </div>
                </div>
            </div>

            <div className="pageTitle my-5 titleBold header white-heading padtop">Design Team</div>
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
            <div className="pageTitle titleBold header white-heading padtop">Content Team</div>
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
            <div className="pageTitle titleBold header white-heading padtop">Web Team</div>
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
            <div className="pageTitle titleBold header white-heading padtop">Outreach Team</div>
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

        </>
    )
}
