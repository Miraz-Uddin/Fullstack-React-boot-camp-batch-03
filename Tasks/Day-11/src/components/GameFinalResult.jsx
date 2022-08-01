import React from "react";

export default function GameFinalResult({ gamePoints }) {
  const { p1GamePoints, p2GamePoints } = gamePoints;
  let winner = "Player 1";
  if (p1GamePoints == 20) {
    winner = "Player 1";
  } else {
    winner = "Player 2";
  }
  return (
    <div className="col-md-12 col-lg-5 mb-4">
      <div className="h-100 p-5 bg-light border rounded-3 text-center">
        <h2>Game Over !!</h2>
        <p className="mt-3">{winner} Won</p>
      </div>
    </div>
  );
}
