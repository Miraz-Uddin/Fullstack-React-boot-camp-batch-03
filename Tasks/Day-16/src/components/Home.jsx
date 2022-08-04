import React from "react";
import GeneralInput from "../formInputs/GeneralInput";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <form className="row g-3">
                  <div className="col-md-6 col-lg-4">
                    <GeneralInput />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
