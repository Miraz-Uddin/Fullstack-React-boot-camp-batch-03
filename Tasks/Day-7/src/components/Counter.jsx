import React, { useState } from "react";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

export default function Counter() {
  const [count, setCount] = useState(0);
  const cardValues = [30, 33, 98, 10];
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrementByNum = () => {
    const inc = document.querySelector("#increment_by");
    if (inc.value) setCount(count + parseInt(inc.value));
  };
  const handleDecrementByNum = () => {
    const dec = document.querySelector("#decrement_by");
    if (dec.value) setCount(count - parseInt(dec.value));
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const [pickedNumber, setPickedNumber] = useState(null);
  console.log(pickedNumber);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <div
              className="card text-white bg-secondary mb-3"
              style={{ width: "25rem", margin: "auto" }}
            >
              <div className="card-body">
                <h5 className="card-title">Counter App</h5>
                <p className="card-text">Click Below Links to see the magic</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleIncrement} className="btn btn-primary">
                    Increment By 1
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <div className="input-group">
                    <span className="input-group-text">Increment by</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="3"
                      id="increment_by"
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      id="button-addon2"
                      onClick={handleIncrementByNum}
                    >
                      <IoIosAddCircle />
                    </button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleDecrement} className="btn btn-danger">
                    Decrement By 1
                  </button>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <div className="input-group">
                    <span className="input-group-text">Decrement by</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="5"
                      id="decrement_by"
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      id="button-addon2"
                      onClick={handleDecrementByNum}
                    >
                      <IoIosRemoveCircle />
                    </button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button onClick={handleReset} className="btn btn-success">
                    Reset
                  </button>
                </li>
              </ul>
              <div className="card-body d-flex justify-content-center">
                <p className="card-text">Count Value : {count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-8 m-auto">
            <div
              className="card text-white bg-dark mb-3"
              style={{ width: "25rem", margin: "auto" }}
            >
              <IsOddOrEven pickedNumber={pickedNumber} />
              <RandomCards
                cardValues={cardValues}
                setPickedNumber={setPickedNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function IsOddOrEven({ pickedNumber }) {
  return (
    <>
      <div className="card-body text-center">
        {!pickedNumber && (
          <p className="card-text">No Number is Selected Yet</p>
        )}
        {pickedNumber && (
          <p className="card-text">
            Selected Number: {pickedNumber} is{" "}
            {pickedNumber % 2 == 0 ? (
              <b className="text-success">Even</b>
            ) : (
              <b className="text-warning">Odd</b>
            )}
          </p>
        )}
      </div>
    </>
  );
}

function RandomCards({ cardValues, setPickedNumber }) {
  return (
    <>
      <div className="card-body">
        <p className="d-flex justify-content-center">
          {cardValues.map((cardValue, index) => (
            <span
              className="badge rounded-pill bg-primary me-2"
              style={{ fontSize: "35px", borderRadius: "50%" }}
              key={index}
              onClick={() => setPickedNumber(cardValue)}
            >
              {cardValue}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
