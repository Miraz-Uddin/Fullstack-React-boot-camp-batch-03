import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-custom">
              <div className="container">
                <button
                  className="navbar-brand"
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <img src="./public/assets/img/logo.png" alt="logo" />
                </button>
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
                      <button
                        className="nav-link active"
                        style={{
                          background: "transparent",
                          border: "none",
                          textTransform: "capitalize",
                        }}
                      >
                        home
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          background: "transparent",
                          border: "none",
                          textTransform: "capitalize",
                        }}
                      >
                        about
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          background: "transparent",
                          border: "none",
                          textTransform: "capitalize",
                        }}
                      >
                        service
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          background: "transparent",
                          border: "none",
                          textTransform: "capitalize",
                        }}
                      >
                        portfolio
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          background: "transparent",
                          border: "none",
                          textTransform: "capitalize",
                        }}
                      >
                        contact
                      </button>
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
