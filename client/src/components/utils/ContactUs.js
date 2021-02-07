import React from "react";
import "../../css/Contact.css";
import { Element } from 'react-scroll';

export default function Featuredproject() {
    return (
        <Element id='contact' name='contact'>
            <div className="contc" id="contact">
                <div className="mainc">
                    <div className="pageTitle titleBold headingc white-headingc" style={{ color: 'white' }}>CONTACT US</div>
                    <ul className="cardsc">
                        <li className="cards_itemc">
                            <div className="cardc">
                                <div className="card_imagec"><img src="https://picsum.photos/500/300/?image=10" /></div>
                                <div className="card_contentc">
                                    <h2 className="card_titlec">Card Grid Layout</h2>
                                    <p className="card_textc">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    <p className="card_textc">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                </div>
                            </div>
                        </li>
                        <li className="cards_itemc">
                            <div className="cardc">
                                <div className="card_imagec"><img src="https://picsum.photos/500/300/?image=5" /></div>
                                <div className="card_contentc">
                                    <h2 className="card_titlec">Card Grid Layout</h2>
                                    <p className="card_textc">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    <p className="card_textc">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <div className="jumbotron">
                        <p className="cent">
                            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Write Us!
                    </a>

                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="cent">
                                <div className="iframecont">
                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScInAmaSeydNQlPIA9GbTcvrv_Y6qSL7954OnOHdsZTMl6imw/viewform?usp=sf_link" title="W3Schools Free Online Web Tutorials" width="800" height="1060" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}
