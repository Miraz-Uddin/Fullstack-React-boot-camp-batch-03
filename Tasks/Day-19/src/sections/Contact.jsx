import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="full-wrapper footer-content">
        <div className="wrapper">
          <div className="footer-head">
            <img src="assets/images/header/logo.png" alt="logo" />
          </div>
          <div className="footer-address">
            <div className="footer-address-section">
              <div className="footer-address-section-left">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="footer-address-section-right">
                <p>1234, Park Street Avenue California, America.</p>
              </div>
            </div>
            <div className="footer-address-section">
              <div className="footer-address-section-left">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="footer-address-section-right">
                <p>instacam@product.com product@instacam.com</p>
              </div>
            </div>
            <div className="footer-address-section mr">
              <div className="footer-address-section-left">
                <i className="fa fa-globe"></i>
              </div>
              <div className="footer-address-section-right">
                <p>www.instacam-product.com www.landing-instacam.com</p>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <h2>follow us</h2>
            <p>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </p>
          </div>
          <div className="footer-terms">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="wrapper">
            <p className="mb-0">
              Copyright &#169; 2022. All rights reserved by{" "}
              <span>DESIGNER.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}