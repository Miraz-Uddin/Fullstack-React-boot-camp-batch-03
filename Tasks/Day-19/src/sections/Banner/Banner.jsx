import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <section id="banner" name="banner">
      <div className={styles.bg}>
        <Container>
          <Row>
            <Col className="banner-content" sm={12} md={12} lg={6}>
              <h1 className={styles.h1}>
                Really Great <span className={styles.span}>DSLR Camera,</span>{" "}
                We’re Made
              </h1>
              <p className={styles.p}>
                <a className={styles.a} href="#">
                  explore more
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <div className={styles.img}>
          <img src="assets/images/banner/banner_image.png" alt="Banner Image" />
        </div>
      </div>
    </section>
  );
}
