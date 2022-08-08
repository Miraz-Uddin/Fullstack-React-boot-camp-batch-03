import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

export default function Navigator() {
  const navElement = useRef();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  function handleScroll(e) {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 650) {
      // document.querySelector(".backToTop").style.display = "none";

      if (scrollPosition > 150) {
        navElement.current.style.backgroundColor = "#fafafa";
      } else {
        navElement.current.style.backgroundColor = "transparent";
      }
    } else {
      // document.querySelector(".backToTop").style.display = "inline-block";
      navElement.current.style.backgroundColor = "#fafafa";
    }
  }
  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`header-section ${matches ? "" : "bg-light"}`}
        ref={navElement}
      >
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
              <Link
                activeClass="activeNavButton"
                to="banner"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
              <Link
                activeClass="activeNavButton"
                to="features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Features
              </Link>
              <Link
                activeClass="activeNavButton"
                to="aboutIt"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About It
              </Link>
              <Link
                activeClass="activeNavButton"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
              <Link
                activeClass="activeNavButton"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
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
