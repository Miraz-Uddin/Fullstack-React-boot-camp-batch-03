import React, { useState } from "react";

export default function Home() {
  const [player1Guess, setPlayer1Guess] = useState("even");
  const [player2Guess, setPlayer2Guess] = useState("odd");
  const [p1Input1, setP1Input1] = useState("");
  const [p1Input2, setP1Input2] = useState("");
  const [p2Input1, setP2Input1] = useState("");
  const [p2Input2, setP2Input2] = useState("");
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white text-center">Squid Game - gGanbu</h1>
            </div>
          </div>
          <div className="row navigation_steps">
            <div role="navigation">
              <ul>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Step-0
                  </a>
                  <ul className="dropdown" aria-label="submenu">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        The game will start, if clicked start
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        we call player 1 as 'p1'
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        we call player 2 as 'p2'
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Step-1
                  </a>
                  <ul className="dropdown" aria-label="submenu">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Suppose it's p1's turn
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        p1 & p2 both have to give number as input
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        p1 will select if p2's given number is Even or Odd
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        p1 will click 'submit' button
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Step-2
                  </a>
                  <ul className="dropdown" aria-label="submenu">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Suppose it's p2's turn
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        p1 & p2 both have to give number as input
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        p2 will select if p1's given number is Even or Odd
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        p2 will click 'submit' button
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Step-3
                  </a>
                  <ul className="dropdown" aria-label="submenu">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Step-1 & Step-2 will be repeating
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        ** Until we find a Winner
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-6 m-auto">
              <p
                className="d-flex justify-content-evenly"
                style={{ width: "385px", margin: "auto" }}
              >
                <button type="button" className="btn btn-primary" id="start">
                  Click to Start the Game
                </button>
                <button
                  type="button"
                  className="btn btn-success d-none"
                  id="stop"
                >
                  Pause
                </button>
                <button type="button" className="btn btn-warning" id="reset">
                  Click to Reset the Game
                </button>
              </p>
            </div>
          </div>
          <div className="row mt-3 mb-5">
            <div className="col-12 col-md-6 m-auto">
              <p
                className="d-flex justify-content-evenly"
                style={{
                  width: "300px",
                  margin: "auto",
                  fontSize: "20px",
                  color: "rgb(51, 255, 0)",
                }}
              >
                Game Time: <span id="game_time_minute">10</span>minutes,{" "}
                <span id="game_time_second">00</span>seconds
              </p>
              <p
                className="d-flex justify-content-evenly"
                style={{
                  width: "130px",
                  margin: "15px auto 0",
                  fontSize: "14px",
                  color: "lavenderblush",
                }}
              >
                Timer:{" "}
                <span id="hours" className="d-none">
                  00
                </span>
                <span id="mins">00</span>:<span id="seconds">00</span>
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 col-lg-5 mb-4">
              <table className="table table table-dark table-p1">
                <thead>
                  <tr>
                    <th colSpan="2" className="text-info text-center">
                      <h3>
                        <b>PLayer 1 Turn</b>
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-primary text-center">
                      PLayer 1's Input
                    </td>
                    <td className="text-primary text-center">
                      PLayer 2's Input
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <form>
                        <input
                          id="p1Input1"
                          type="password"
                          className="form-control"
                          placeholder="Insert (Between 1 - 9)"
                          value={p1Input1}
                          onChange={(e) => setP1Input1(e.target.value)}
                          autoComplete="on"
                        />
                      </form>
                    </td>
                    <td>
                      <form>
                        <input
                          id="p1Input2"
                          type="password"
                          className="form-control"
                          placeholder="Insert (Between 1 - 9)"
                          value={p1Input2}
                          onChange={(e) => setP1Input2(e.target.value)}
                          autoComplete="on"
                        />
                      </form>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="2">
                      <div className="text-info d-flex justify-content-evenly align-items-center">
                        <span>Guess Player 2's input: </span>
                        <select
                          name="player1Guess"
                          id="player1Guess"
                          className="form-select"
                          style={{ width: "99px", textAlign: "center" }}
                          value={player1Guess}
                          onChange={(e) => setPlayer1Guess(e.target.value)}
                        >
                          <option value="odd">Odd</option>
                          <option value="even">Even</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr id="p1SubmitRow" className="d-none">
                    <td colSpan="2">
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-success btn-sm"
                          id="p1Submit"
                        >
                          Submit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                className="table table table-dark table-p2"
                style={{ display: "none" }}
              >
                <thead>
                  <tr>
                    <th colSpan="2" className="text-info text-center">
                      <h3>
                        <b>PLayer 2 Turn</b>
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-primary text-center">
                      PLayer 1's Input
                    </td>
                    <td className="text-primary text-center">
                      PLayer 2's Input
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <form>
                        <input
                          id="p2Input1"
                          type="password"
                          className="form-control"
                          placeholder="Insert (Between 1 - 9)"
                          value={p2Input1}
                          onChange={(e) => setP2Input1(e.target.value)}
                          autoComplete="on"
                        />
                      </form>
                    </td>
                    <td>
                      <form>
                        <input
                          id="p2Input2"
                          type="password"
                          className="form-control"
                          placeholder="Insert (Between 1 - 9)"
                          value={p2Input2}
                          onChange={(e) => setP2Input2(e.target.value)}
                          autoComplete="on"
                        />
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <div className="text-info d-flex justify-content-evenly align-items-center">
                        <span>Guess Player 1's input: </span>
                        <select
                          name="player2Guess"
                          id="player2Guess"
                          className="form-select"
                          style={{ width: "99px", textAlign: "center" }}
                          value={player2Guess}
                          onChange={(e) => setPlayer2Guess(e.target.value)}
                        >
                          <option value="odd">Odd</option>
                          <option value="even">Even</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr id="p2SubmitRow" className="d-none">
                    <td colSpan="2">
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-success btn-sm"
                          id="p2Submit"
                        >
                          Submit
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-12 col-lg-7 mb-4">
              <table className="table text-white">
                <thead>
                  <tr>
                    <th>Turn</th>
                    <th>Guess</th>
                    <th>PLayer 1 Points</th>
                    <th>PLayer 2 Points</th>
                  </tr>
                </thead>
                <tbody id="display_board">
                  <tr>
                    <td>
                      <span>Initial</span>
                    </td>
                    <td>
                      <span>(EVEN)</span>
                    </td>
                    <td>
                      Previous: <span>0</span>, Current: <span>10</span>
                    </td>
                    <td>
                      Previous: <span>0</span>, Current: <span>10</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
