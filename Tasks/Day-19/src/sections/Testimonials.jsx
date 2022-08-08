import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";

function TestimonialNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={style} onClick={onClick} />;
}

function TestimonialPrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={style} onClick={onClick} />;
}

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: ".testimonial-navigation-right",
    // prevArrow: ".testimonial-navigation-left",
    nextArrow: <TestimonialNextArrow />,
    prevArrow: <TestimonialPrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonial" name="testimonial">
      <div className="testimonial-part">
        <Container>
          <Row>
            <Col>
              <div className="testimonial-heading section_heading">
                <h2>Testimonial</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="testimonial-section">
                <Slider {...settings}>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial01.jpg"
                          alt="testimonial image 1"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">Mahadi Tahsan</span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial02.jpg"
                          alt="testimonial image 2"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">Sakeba Irin</span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial03.jpg"
                          alt="testimonial image 3"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">Sajal Sardar</span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial04.jpg"
                          alt="testimonial image 4"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">Sharifa Akter</span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial05.jpg"
                          alt="testimonial image 5"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">
                        Muttakin Islam Ove
                      </span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial06.jpg"
                          alt="testimonial image 6"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">
                        Shohan Hossain Ean
                      </span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial07.jpg"
                          alt="testimonial image 7"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">
                        M.h. Sajjad Hossain Ripon
                      </span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial08.jpg"
                          alt="testimonial image 8"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">Sujon Saha</span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-section-slide">
                    <div className="testimonial-section-slide-head">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiing elit, sed
                        do eiusmod tempor incididunt utabore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                      <div className="circleImage">
                        <img
                          src="assets/images/testimonials/testimonial09.jpg"
                          alt="testimonial image 9"
                        />
                      </div>
                    </div>
                    <div className="testimonial-section-slide-body">
                      <span className="testimonialName">Miraz Uddin</span>
                      <span className="testimonialDesignation">
                        Chairman - Instacam
                      </span>
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* <div className="testimonial-navigation">
                <p>
                  <i className="fa fa-long-arrow-left testimonial-navigation-left"></i>
                  <i className="fa fa-long-arrow-right testimonial-navigation-right"></i>
                </p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
