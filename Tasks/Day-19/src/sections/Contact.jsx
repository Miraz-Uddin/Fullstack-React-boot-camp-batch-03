import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <section id="contact" name="contact">
      <div className="footer-content">
        <Container>
          <Row>
            <Col>
              <div className="footer-head">
                <img src="assets/images/header/logo.png" alt="logo" />
              </div>
              <Row>
                <Col sm={12} md={6} lg={4}>
                  <div className="footer-address-section">
                    <div className="footer-address-section-left">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="footer-address-section-right">
                      <p>1234, Park Street Avenue California, America.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <div className="footer-address-section">
                    <div className="footer-address-section-left">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="footer-address-section-right">
                      <p>instacam@product.com product@instacam.com</p>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <div className="footer-address-section">
                    <div className="footer-address-section-left">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="footer-address-section-right">
                      <p>www.instacam-product.com www.landing-instacam.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="footer-social">
                <h2>follow us</h2>
                <p>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </p>
              </div>
              <div className="footer-terms">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright">
          <Container>
            <Row>
              <Col>
                <p className="mb-0">
                  Copyright &#169; 2022. All rights reserved by{" "}
                  <span>DESIGNER.</span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
