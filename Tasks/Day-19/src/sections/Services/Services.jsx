import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./services.module.scss";

const itemDetails = {
  type: "tripod",
  placing: "standing",
  "legs qty": 3,
  "lock type": "flip lock",
  "quick release": "yes",
  "column type": "geared",
  "max height": "61 in",
  "min height": "22 in",
  supported: "camcorder",
};
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
        <Row>
          <Col md={12} lg={6}>
            <Row>
              <Col xs={12} sm={6} className="mb-3">
                <div className={styles.item}>
                  <img
                    src="assets/images/services/service_images_2.png"
                    alt="service Image 1"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <div className={styles.item}>
                  <img
                    src="assets/images/services/service_images_3.png"
                    alt="service Image 1"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <div className={styles.item}>
                  <img
                    src="assets/images/services/service_images_4.png"
                    alt="service Image 1"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6} className="mb-3">
                <div className={styles.item}>
                  <img
                    src="assets/images/services/service_images_1.png"
                    alt="service Image 1"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={6}>
            <Row className={styles.bg}>
              <Col sm={12} md={5} className={styles.item}>
                <div>
                  <img
                    src="assets/images/services/services_right_image.png"
                    alt="Camera tripod image"
                  />
                </div>
              </Col>
              <Col sm={12} md={7}>
                <div className={styles.details}>
                  <h2 className={styles.h2}>Monochrome Camera Tripod</h2>
                  <ul className={styles.list}>
                    {itemDetails &&
                      Object.entries(itemDetails).map(([key, value]) => (
                        <li className={styles.li}>
                          <span>{key}</span>
                          <span>{value}</span>
                        </li>
                      ))}
                  </ul>
                  <a className={styles.a} href="#">
                    Full specification
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
