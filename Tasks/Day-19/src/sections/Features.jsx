import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Features() {
  return (
    <section id="features" name="features">
      <div className="feature-section">
        <Container>
          <Row>
            <Col>
              <div className="features_heading section_heading">
                <h2>Instacam features</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="features_items">
                <div className="features_items_left">
                  <div className="features_items_section l1">
                    <span className="flaticon-camera-lens defect"></span>
                    <h2>18mm - 155cm zoom lens</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adisit, sed do
                      eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                      minim veniam.
                    </p>
                    <div className="circle circle_1 plus1">
                      <div className=" circle circle_2">
                        <div className=" circle circle_3">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features_items_section l2">
                    <span className="flaticon-focus"></span>
                    <h2>Auto Focus</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adisit, sed do
                      eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                      minim veniam.
                    </p>
                    <div className="circle circle_1 plus2">
                      <div className=" circle circle_2">
                        <div className=" circle circle_3">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features_items_center">
                  <img
                    src="assets/images/features/feature_image.png"
                    alt="feature_Image"
                  />
                </div>
                <div className="features_items_right">
                  <div className="features_items_section l3">
                    <span className="flaticon-blur m9"></span>
                    <h2>Blur Effect</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adisit, sed do
                      eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                      minim veniam.
                    </p>
                    <div className="circle circle_1 plus3">
                      <div className=" circle circle_2">
                        <div className=" circle circle_3">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features_items_section l4">
                    <span className="flaticon-aperture"></span>
                    <h2>Natural Color</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adisit, sed do
                      eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                      minim veniam.
                    </p>
                    <div className="circle circle_1 plus4">
                      <div className=" circle circle_2">
                        <div className=" circle circle_3">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
