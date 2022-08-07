import React from "react";

export default function Nav() {
  return (
    <header>
      <div className="full-wrapper">
        <nav>
          <div className="wrapper">
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
          </div>
        </nav>
      </div>
    </header>
  );
}
