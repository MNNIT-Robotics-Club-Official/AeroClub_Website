import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Sponsor.css";
import logo from "../../images/utils/collegelogo.png";

export default function Ṣponsors() {
  document.title = `Sponsors | Events`;

  return (
    <>
      <Loading />
      <div className=" pagesg">
        <div className="overlayg">
          <div className="pageTitleg titleBoldg">Sponsors</div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="d-flex flex-wrap mx-auto justify-content-center align-items-center"
          style={{ width: "80%" }}
        >
          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto imgphone sponimg"
                  src={logo}
                  alt="mnnit"
                  srcset=""
                />
              </a>
            </div>

            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                MNNIT ALLAHABAD
              </a>
              <p className="card-text text-center txt">
                Motilal Nehru National Institute of Technology Allahabad,
                Prayagraj (MNNIT) is an Institute of National Importance with
                total commitment to quality and excellence in academic pursuits.
                It was established as one of the Seventeen Regional Engineering
                Colleges of India in the year 1961 as a joint enterprise of
                Government of India and Government of Uttar Pradesh, and was an
                associated college of University of Allahabad, which is the
                third oldest university in India
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto sponimg"
                  src="http://mnnit.ac.in/sae/Common%20Resource/assets/img/logos/cisco.webp"
                  alt="cisco"
                  srcset=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                Cisco ThingQbator
              </a>
              <p className="card-text text-center txt">
                Encourages a rapid prototyping mindset with 24/7 access to the
                makerspace and all the equipment therein as well as active
                mentorship and training
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://tsaw.tech/index.php"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto sponimg"
                  src="https://tsaw.tech/images/tsawlogo.png"
                  alt="tsaw"
                  srcset=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://tsaw.tech/index.php"
                target="_blank"
              >
                TSAW
              </a>
              <p className="card-text text-center txt">
                TSAW's establishment depends on the standards of coordinated
                effort and creation with long haul objectives in sight. The
                errands are not straightforward and the clock is ticking as of
                now. With numerous players as of now in the part, it will be a
                long and hard assignment, be that as it may, we accept with our
                exceptionally determined and serious group, it wouldn't be some
                time before we accomplish every one of our objectives,
                empowering humankind to flourish without any problem.
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
