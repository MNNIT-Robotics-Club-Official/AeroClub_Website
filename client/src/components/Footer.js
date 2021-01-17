import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <div>
      {/* Site footer */}
      <footer className="site-footer container-fluid">
        <div className="topBottomMargin">
          <div className="wrap mar">

            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className="box">
              <div className="col-xs-6 col-md-auto">
                <h6>Quick-Links</h6>
                <ul className="footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#home">About Us</a></li>
                  <li><a href="#home">MNNIT</a></li>
                  <li><a href="#home">Terms of Services</a></li>
                  <li><a href="#home">Private Policy</a></li>
                  <li><a href="#home">Contact Us</a></li>
                </ul>
              </div>
              </div>
              <div className="box">
              <div className="col-xs-6 col-md-auto">
                <h6>Contributions</h6>
                <ul className="footer-links">
                  <li><a href="#home">Projects</a></li>
                  <li><a href="#home">Blogs</a></li>
                  <li><a href="#home">Gallery</a></li>
                  <li><a href="#home">Videos</a></li>
                  <li><a href="#home">Alumni</a></li>
                </ul>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="wrap mar">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright © 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}