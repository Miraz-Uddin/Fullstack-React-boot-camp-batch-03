import React from "react";

export default function Content() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content col-12">
              <h1 className="heading text-light text-center">
                <span>strict</span>
              </h1>
              <h2 className="writting text-light text-center">
                STRICT is a responsive theme with a a clean and minimal look.
              </h2>
              <p className="button text-center">
                <button className="btn btn-outline-info text-light">
                  Call to action
                </button>
              </p>
              <p className="downarrow  text-center">
                <button className="text-light">
                  <i className="fa fa-chevron-down"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
