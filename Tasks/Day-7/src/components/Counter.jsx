import React from "react";

export default function Counter() {
  const handleInrement = () => {
    console.log("Handled increment");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Counter App</h5>
                <p className="card-text">Click Below Links to see the magic</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleInrement} className="btn btn-primary">
                    Increment
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button className="btn btn-danger">Decrement</button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button className="btn btn-success">Reset</button>
                </li>
              </ul>
              <div className="card-body d-flex justify-content-center">
                <p className="card-text">Count Value : 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
