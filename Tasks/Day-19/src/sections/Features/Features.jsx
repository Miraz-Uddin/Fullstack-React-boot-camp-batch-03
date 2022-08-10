import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./feature.module.scss";

export default function Features() {
  return (
    <section id="features" name="features" className={styles.extra}>
      <Container>
        <div className="section_heading">
          <h2>Instacam features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Row className={styles.feature}>
          <Col md={12} lg={3}>
            <Row>
              <Col md={6} lg={12}>
                <div className={`${styles.item}`}>
                  <span
                    className={`flaticon-camera-lens ${styles.defect}`}
                  ></span>
                  <h2>18mm - 155cm zoom lens</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className={`${styles.circle} ${styles.c1} ${styles.p1}`}>
                    <div className={`${styles.circle} ${styles.c2}`}>
                      <div className={`${styles.circle} ${styles.c3}`}>
                        <i className={`fa fa-plus ${styles.i}`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={12}>
                <div className={`${styles.item}`}>
                  <span className="flaticon-focus"></span>
                  <h2>Auto Focus</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniar.
                  </p>
                  <div className={`${styles.circle} ${styles.c1} ${styles.p2}`}>
                    <div className={`${styles.circle} ${styles.c2}`}>
                      <div className={`${styles.circle} ${styles.c3}`}>
                        <i className={`fa fa-plus ${styles.i}`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={6}>
            <div className={styles.img}>
              <img
                src="assets/images/features/feature_image.png"
                alt="feature_Image"
              />
            </div>
          </Col>
          <Col md={12} lg={3}>
            <Row>
              <Col md={6} lg={12}>
                <div className={`${styles.item}`}>
                  <span className="flaticon-blur m9"></span>
                  <h2>Blur Effect</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className={`${styles.circle} ${styles.c1} ${styles.p3}`}>
                    <div className={`${styles.circle} ${styles.c2}`}>
                      <div className={`${styles.circle} ${styles.c3}`}>
                        <i className={`fa fa-plus ${styles.i}`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={12}>
                <div className={`${styles.item}`}>
                  <span className="flaticon-aperture"></span>
                  <h2>Natural Color</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className={`${styles.circle} ${styles.c1} ${styles.p4}`}>
                    <div className={`${styles.circle} ${styles.c2}`}>
                      <div className={`${styles.circle} ${styles.c3}`}>
                        <i className={`fa fa-plus ${styles.i}`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
