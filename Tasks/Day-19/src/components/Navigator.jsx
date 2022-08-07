import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigator() {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="py-0 header-section">
        <Container>
          <Navbar.Brand href="#home">
            <img src="assets/images/header/logo.png" alt="Logo Image" />
          </Navbar.Brand>
          <Form className="d-md-block d-lg-none">
            <div className="search-bar">
              <Button>
                <i className="fa fa-search" aria-hidden="true"></i>
              </Button>
            </div>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-menu">
              <Nav.Link href="#banner">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#aboutIt">About It</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-none d-md-none d-lg-block">
              <div className="search-bar">
                <Button>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
