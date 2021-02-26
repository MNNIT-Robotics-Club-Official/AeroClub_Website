import React from "react";
import "../../css/Contact.css";
import { baseURL } from "../../baseUtils";

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="pageTitle titleBold headingc white-headingc" data-aos="fade-up" style={{marginBottom:'5px'}}>CONTACT US</div>
            <div className="miniSep" style={{marginBottom:'25px'}} ></div>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <div className="contact-map col-sm-12 col-md-10 col-lg-10" data-aos="fade-up"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.3684448548224!2d81.86129846157309!3d25.492755875129337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1597107680196!5m2!1sen!2sin" width="100%" height="260" frameborder="0" allowFullScreen></iframe>
                </div>
                <div className="contact-us-body d-flex flex-wrap justify-content-center align-items-center col-sm-12 col-md-12 col-lg-10">
                    <div className="contact-logo align-self-center d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-4 col-lg-6" data-aos="zoom-out-right">
                        <img src={`${baseURL}/images/utils/mnnit.png`} alt="mnnit" srcset="" style={{width:'auto', height:'100%', margin:'18px'}} />
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <h6>Motilal Nehru National Institute of Technology Allahabad, Prayagraj</h6>
                        </div>
                    </div>
                    <div className="contact-information col-sm-12 col-md-5 col-lg-5" data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="contact-location d-flex justify-content-start">
                            <i class="fa fa-lg fa-map-marker"></i>
                            <div className='after-logo'>
                                <h4> Location : </h4><br />
                        Barrister Mullah Colony,<br />
                        MNNIT Allahabad Campus,<br />
                        Teliarganj,Prayagraj <br />
                        PIN-211004
                        </div>
                        </div><br />
                        <div className="contact-email d-flex justify-content-start" data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <i class="fa fa-envelope"></i>
                            <div className='after-logo'>
                                <h4> Email : </h4><br />
                            aeroclubmnnit@mnnit.ac.in
                            </div>
                        </div><br />
                        <div className="d-flex justify-content-start" data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <i class="fa fa-phone"></i>
                            <div className='after-logo'>
                                <h4> Contact : </h4><br />
                                +91 7390909434 +91 7275195776
                            </div>
                        </div><br />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ContactUs