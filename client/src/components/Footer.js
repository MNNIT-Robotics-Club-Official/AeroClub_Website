import React from "react";
import "../css/footer.css"
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import { Link as Scroll } from 'react-scroll';

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
                    <li><Link to="/" >Home</Link></li>
                    {/* <li><a href="#home">About Us</a></li> */}
                    <li><a href="#home">MNNIT</a></li>
                    <li><a href="#home">Web Team</a></li>
                    {/* <li><a href="#home">Terms of Services</a></li> */}
                    {/* <li><a href="#home">Private Policy</a></li> */}
                    <li><Scroll
                      to="contact"
                      spy={true}
                      style={{cursor:"pointer"}}
                      smooth={true}
                      duration={1000}>Contacts</Scroll>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <div className="col-xs-6 col-md-auto">
                  <h6>Contributions</h6>
                  <ul className="footer-links">
                    <li><Link to="/Projects" >Projects</Link></li>
                    <li><Link to="/blogs" >Blogs</Link></li>
                    <li><Link to="/Gallery" >Gallery</Link></li>
                    <li><Link to="/news" >Updates</Link></li>
                    <li><Link to="/Alumni" >Alumni</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="wrap mar">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright © 2021 All Rights Reserved by
                <a href="#"> Aero-Club MNNIT</a>.
              </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <SocialIcon url="http://twitter.com/jaketrent" />
                  <SocialIcon url="http://facebook.com/jaketrent" />
                  <SocialIcon url="http://github.com/jaketrent" />
                  <SocialIcon url="http://youtube.com/jaketrent" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}