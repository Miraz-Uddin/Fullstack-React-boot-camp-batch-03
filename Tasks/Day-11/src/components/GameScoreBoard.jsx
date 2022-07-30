import React from "react";

export default function GameScoreBoard() {
  return (
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
  );
}
