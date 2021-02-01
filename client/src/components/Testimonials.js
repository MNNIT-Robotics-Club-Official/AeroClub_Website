import React from "react";
import "../css/testimonials.css";

export default function Testimonials() {
      return (

        <section className="testimonial text-center">
          <div className="container">
            <div className="pageTitle titleBold header white-heading">
              Testimonial
            </div>
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval={5000} data-duration={2000}>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="testimonial4_slide">
                    <img src="https://images.unsplash.com/photo-1501623021299-5a9e5f95960b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" className="img-circle img-responsive" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <h4>Client 1</h4>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial4_slide">
                    <img src="https://images.unsplash.com/photo-1501623021299-5a9e5f95960b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" className="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <h4>Client 2</h4>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial4_slide">
                    <img src="https://images.unsplash.com/photo-1501623021299-5a9e5f95960b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" className="img-circle img-responsive" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <h4>Client 3</h4>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                <span className="carousel-control-prev-icon" />
              </a>
              <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
        </section>
      );
    }