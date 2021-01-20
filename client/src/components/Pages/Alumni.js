import React from "react";

import "../../css/Alumni.css";
import Navigbar from '../Navigbar.js';
import Footer from '../Footer.js';

export default function Alumni() {
    return (
        <>
            <><Navigbar /></>

            <>
                <div className="container">
                    <div className="gallery">
                        <a className="gallery-item" href="#"><img src="http://www.placeimg.com/330/265" alt="Headshot of George Washington" /><span className="text-wrapper"><span className="name">George Washington</span><span className="title">Principal</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of John Adams" /><span className="text-wrapper"><span className="name">John Adams</span><span className="title">Chief Financial Officer</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of Thomas Jefferson" /><span className="text-wrapper"><span className="name">Thomas Jefferson</span><span className="title">Chief Operating Officer</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of James Madison" /><span className="text-wrapper"><span className="name">James Madison</span><span className="title">Developer</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of James Monroe" /><span className="text-wrapper"><span className="name">James Monroe</span><span className="title">Developer</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of Andrew Jackson" /><span className="text-wrapper"><span className="name">Andrew Jackson</span><span className="title">Designer</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of John Tyler" /><span className="text-wrapper"><span className="name">John Tyler</span><span className="title">Designer</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of James Polk" /><span className="text-wrapper"><span className="name">James Polk</span><span className="title">Project Manager</span></span></a>
                        <a className="gallery-item" href="#"><img src="http://placeimg.com/330/265" alt="Headshot of Zachary Taylor" /><span className="text-wrapper"><span className="name">Zachary Taylor</span><span className="title">Project Manager</span></span></a>
                    </div>
                </div>
            </>

            <><Footer /></>
        </>
    );
}