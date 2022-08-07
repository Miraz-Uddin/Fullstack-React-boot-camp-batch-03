import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Banner() {
  return (
    <section id="banner">
      <div className="banner-section">
        <Container>
          <Row>
            <Col className="banner-content">
              <h1>
                Really Great <span>DSLR Camera,</span> We’re Made
              </h1>
              <a href="#">explore more</a>
              <div className="banner-content-image">
                <img
                  src="assets/images/banner/banner_image.png"
                  alt="Banner Image"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="wrapper banner-content"></div>
      </div>
    </section>
  );
}
