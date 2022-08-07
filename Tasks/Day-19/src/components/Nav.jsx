import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Nav() {
  return (
    <header>
      <nav>
        <Container>
          <Row>
            <Col>
              <div className="header-content">
                <div className="logo">
                  <a href="#">
                    <img src="assets/images/header/logo.png" alt="Logo Image" />
                  </a>
                </div>
                <div className="main-menu">
                  <ul>
                    <li>
                      <a href="#banner" className="activeNavButton">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#features">Features</a>
                    </li>
                    <li>
                      <a href="#aboutIt">About it</a>
                    </li>
                    <li>
                      <a href="#testimonial">Testimonial</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="search-bar">
                  <a href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
}
