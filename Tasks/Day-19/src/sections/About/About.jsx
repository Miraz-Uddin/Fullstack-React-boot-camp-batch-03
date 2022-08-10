import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="aboutIt" name="aboutIt" className={styles.bg}>
      <Container>
        <Row>
          <Col sm={12} md={3} lg={5}></Col>
          <Col sm={12} md={9} lg={7} className={styles.details}>
            <div className={styles.image}>
              <img
                src="assets/images/aboutIt/abooutIt_image.png"
                alt="about it image"
              />
            </div>
            <h2 className={styles.h2}>
              About Instacam, <br /> It’s Tripod & Products
            </h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              liquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className={`${styles.p} ${styles.para}`}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </p>
            <a href="#" className={styles.a}>
              Read more
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
