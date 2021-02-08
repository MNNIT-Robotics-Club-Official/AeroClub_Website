import React from "react";
import "../css/featured-proj.css";

export default function Featuredproject() {
      return (
        <div className="cont">
          <div className="main">
            <div className="pageTitle titleBold header white-heading padtop">Featured Projects</div>
            <ul className="cards">
              <li className="cards_item">
                <div className="card cardproj">
                  <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                  <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className="btns card_btns">Read More</button>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card cardproj">
                  <div className="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
                  <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className="btns card_btns">Read More</button>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card cardproj">
                  <div className="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
                  <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className="btns card_btns">Read More</button>
                  </div>
                </div>
              </li>
              {/* <li className="cards_item">
                <div className="card">
                  <div className="card_image"><img src="https://picsum.photos/500/300/?image=14" /></div>
                  <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className="btns card_btns">Read More</button>
                  </div>
                </div>
              </li> */}
              {/*<li className="cards_item">
                <div className="card">
                  <div className="card_image"><img src="https://picsum.photos/500/300/?image=17" /></div>
                  <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className="btns card_btns">Read More</button>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card">
                  <div className="card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
                  <div className="card_content">
                    <h2 className="card_title">Card Grid Layout</h2>
                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className="btns card_btns">Read More</button>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      );
    }
  

//   export default Featuredproject;