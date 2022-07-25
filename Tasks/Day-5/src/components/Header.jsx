import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-custom">
              <div className="container">
                <a className="navbar-brand" href="./index.html">
                  <img src="./public/assets/img/logo.png" alt="logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav custom-list">
                    <li className="nav-item">
                      <a className="nav-link active" href="./index.html">
                        home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./about.html">
                        about
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./service..html">
                        service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./portfolio.html">
                        portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./contact.html">
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
