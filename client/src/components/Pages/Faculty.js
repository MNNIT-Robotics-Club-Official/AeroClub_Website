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
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {[1, 2, 3, 4, 5, 5, 6].map((i, e) => (
            <div class="card card-item shadow" style={{ width: "15rem" }}>
              <img
                class="card-img-top"
                src={`../images/utils/aero.png`}
                alt="Card image cap"
              />
              <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                <h5 class="card-title text-center">Bhuvan Jhamb</h5>
                <p class="card-text text-center">
                  Final year, Mechanical Engineering
                </p>
                <a href="#" class="btn btn-danger mx-auto">
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
