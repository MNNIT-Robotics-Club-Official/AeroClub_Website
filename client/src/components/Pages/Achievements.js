import React, { useEffect, useState } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";

export default function Achievements() {
  const [data, setdata] = useState([])
  document.title = "Achievements | Aero Club";
  useEffect(() => {
    fetch(`/api/achievement/year`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
      });
  }, []);
  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Achievements</div>
        </div>
      </div>

      <div class="container alumni-container mb-5">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                {data.map(a => {
                  <a
                  class="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                 >
                   {a._id}
                 </a>
                })}
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse show">
              <div class="panel-body">
                <div className="container">
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    list
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
