import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/">
              <span>Com</span>pany
            </Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>

              <li className="drop-down">
                <Link to="about">About</Link>
                <ul>
                  <li>
                    <Link to="about">About Us</Link>
                  </li>
                  <li>
                    <Link to="team">Team</Link>
                  </li>
                  <li>
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li className="drop-down">
                    <a href="#">Deep Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}

          <div className="header-social-links">
            <a href="#" className="twitter">
              <i className="icofont-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="icofont-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="icofont-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}