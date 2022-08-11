import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./faq.module.scss";

export default function Faq() {
  return (
    <section className={styles.extra}>
      <Container>
        <Row className={styles.extra}>
          <Col className={styles.left} sm={12} md={8}>
            <h2 className={styles.h2}>Frequently ask questions</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className={styles.item}>
                <Accordion.Header>
                  <span className={styles.span}>
                    Who was the first man to walk on the moon land?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore na aliqua. Ut
                  enim ad minim veniamquis nostrud exercitation ullamco. Lorem
                  ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={styles.item}>
                <Accordion.Header>
                  <span className={styles.span}>
                    Is training/onboarding included? How long does the process
                    take?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore na aliqua. Ut
                  enim ad minim veniamquis nostrud exercitation ullamco. Lorem
                  ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={styles.item}>
                <Accordion.Header>
                  <span className={styles.span}>
                    Can I measure/report on the performance of my reps?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore na aliqua. Ut
                  enim ad minim veniamquis nostrud exercitation ullamco. Lorem
                  ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className={styles.item}>
                <Accordion.Header>
                  <span className={styles.span}>
                    Can I customize the app according to my needs?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore na aliqua. Ut
                  enim ad minim veniamquis nostrud exercitation ullamco. Lorem
                  ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className={styles.right} sm={12} md={4}>
            <h2 className={styles.h2}>Subscribe to our Newsletter Today!</h2>
            <p className={styles.p}>
              We’ll send you to our al new updates to your inbox directly.
              Subscribe with your e-mail today!
            </p>
            <div className={styles.form}>
              <form action="#">
                <input
                  type="email"
                  placeholder="Your e-mail here"
                  className={`form-control ${styles.input}`}
                />
                <a className={styles.a} href="#">
                  Subscribe
                </a>
              </form>
            </div>
            <p>
              <i className={`fa fa-lock ${styles.i}`}></i>We don’t share your
              information to other. Your informations are safe.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
