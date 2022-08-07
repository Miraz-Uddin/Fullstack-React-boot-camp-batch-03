import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Services() {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col>
            <div className="services-heading section_heading">
              <h2>Instacam’s Latest Product</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="services-content g-0">
          <Col className="services-content-left" md={12} lg={12} xl={6}>
            <div className="services-content-left-item service-image-1">
              <img
                src="assets/images/services/ser_left_img1.png"
                alt="service Image 1"
              />
              <a
                className="serviceSlides"
                data-gall="gallery01"
                href="assets/images/services/ser_left_img1_big.jpg"
              >
                <div className="services-content-left-item-overlay">
                  <div className="circlePara">
                    <p>view specifications</p>
                  </div>
                  <div className="circle circle_1">
                    <div className="circle circle_2">
                      <i className="fa fa-plus"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="services-content-left-item service-image-2">
              <img
                src="assets/images/services/ser_left_img2.png"
                alt="service Image 2"
              />
              <a
                className="serviceSlides"
                data-gall="gallery01"
                href="assets/images/services/ser_left_img2_big.jpg"
              >
                <div className="services-content-left-item-overlay">
                  <div className="circlePara">
                    <p>view specifications</p>
                  </div>
                  <div className="circle circle_1">
                    <div className="circle circle_2">
                      <i className="fa fa-plus"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="services-content-left-item service-image-3">
              <img
                src="assets/images/services/ser_left_img3.png"
                alt="service Image 3"
              />
              <a
                className="serviceSlides"
                data-gall="gallery01"
                href="assets/images/services/ser_left_img3_big.jpg"
              >
                <div className="services-content-left-item-overlay">
                  <div className="circlePara">
                    <p>view specifications</p>
                  </div>
                  <div className="circle circle_1">
                    <div className="circle circle_2">
                      <i className="fa fa-plus"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="services-content-left-item service-image-4">
              <img
                src="assets/images/services/ser_left_img4.png"
                alt="service Image 4"
              />
              <a
                className="serviceSlides"
                data-gall="gallery01"
                href="assets/images/services/ser_left_img4_big.jpg"
              >
                <div className="services-content-left-item-overlay">
                  <div className="circlePara">
                    <p>view specifications</p>
                  </div>
                  <div className="circle circle_1">
                    <div className="circle circle_2">
                      <i className="fa fa-plus"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col className="services-content-right" md={12} lg={12} xl={6}>
            <div className="services-content-right-image">
              <img
                src="assets/images/services/services_right_image.png"
                alt="Camera tripod image"
              />
            </div>
            <div className="services-content-right-details">
              <h2>Monochrome Camera Tripod</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>tripod</td>
                  </tr>
                  <tr>
                    <td>Placing</td>
                    <td>standing</td>
                  </tr>
                  <tr>
                    <td>Legs Qty</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Lock Type</td>
                    <td>flip lock</td>
                  </tr>
                  <tr>
                    <td>Quick Release</td>
                    <td>yes</td>
                  </tr>
                  <tr>
                    <td>Column Type</td>
                    <td>geared</td>
                  </tr>
                  <tr>
                    <td>Max Height</td>
                    <td>61 in</td>
                  </tr>
                  <tr>
                    <td>Min Height</td>
                    <td>22 in</td>
                  </tr>
                  <tr>
                    <td>Supported</td>
                    <td>camcorder</td>
                  </tr>
                </tbody>
              </table>
              <a href="#">Full specification</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
