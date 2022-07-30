import React from "react";

export default function GamePlay(gameInputs, setGameInputs) {
  const { player1Guess, player2Guess, p1Input1, p1Input2, p2Input1, p2Input2 } =
    gameInputs;
  const {
    setPlayer1Guess,
    setPlayer2Guess,
    setP1Input1,
    setP1Input2,
    setP2Input1,
    setP2Input2,
  } = setGameInputs;
  // console.log(player1Guess)
  return (
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
            <td className="text-primary text-center">PLayer 1's Input</td>
            <td className="text-primary text-center">PLayer 2's Input</td>
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
                <button className="btn btn-success btn-sm" id="p1Submit">
                  Submit
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table table-dark table-p2">
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
            <td className="text-primary text-center">PLayer 1's Input</td>
            <td className="text-primary text-center">PLayer 2's Input</td>
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
                <button className="btn btn-success btn-sm" id="p2Submit">
                  Submit
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
