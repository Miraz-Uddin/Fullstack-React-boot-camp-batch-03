import React from "react";

export default function GameScoreBoard({ gameScore }) {
  return (
    <div className="col-md-12 col-lg-7 mb-4 mx-auto">
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
          {gameScore
            .filter((x, i) => i > 1)
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span>{item.turn}</span>
                  </td>
                  <td>
                    <span>{`(${item.guess})`}</span>
                  </td>
                  <td>
                    Previous: <span>{item.p1Previous}</span>, Current:{" "}
                    <span>{item.p1Current}</span>
                  </td>
                  <td>
                    Previous: <span>{item.p2Previous}</span>, Current:{" "}
                    <span>{item.p2Current}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
