import React, { useEffect, useState } from "react";
import GameControllers from "./GameControllers";
import GamePlay from "./GamePlay";
import GameScoreBoard from "./GameScoreBoard";
// import GameRules from "./GameRules";
// import GameTimer from "./GameTimer";

const initialTurns = {
  player1Turn: true,
  player2Turn: false,
};

const initialGamePoints = {
  p1PreviousPoints: 0,
  p1GamePoints: 10,
  p2PreviousPoints: 0,
  p2GamePoints: 10,
};

const initialGameInputs = {
  player1Guess: "even",
  player2Guess: "odd",
  p1Input1: "",
  p1Input2: "",
  p2Input1: "",
  p2Input2: "",
};

const initialGameMomentum = {
  isGameStarted: false,
  isGamePaused: true,
  isGameReset: true,
  isGameResumed: true,
};

export default function Home() {
  const [p1SubmitBtnActive, setP1SubmitBtnActive] = useState(false);
  const [p2SubmitBtnActive, setP2SubmitBtnActive] = useState(false);
  const [turn, setTurn] = useState(initialTurns);
  const [gamePoints, setGamePoints] = useState(initialGamePoints);
  const [gameInputs, setGameInputs] = useState(initialGameInputs);
  const [gameMomentum, setGameMomentum] = useState(initialGameMomentum);
  const [gameScore, setGameScore] = useState([
    {
      turn: "Initial",
      p1Previous: gamePoints.p1PreviousPoints,
      p1Current: gamePoints.p1GamePoints,
      p2Previous: gamePoints.p2PreviousPoints,
      p2Current: gamePoints.p2GamePoints,
    },
  ]);

  const gameStartBtn = (e) => {
    e.preventDefault();
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGameStarted: true,
        isGamePaused: false,
        isGameReset: false,
        isGameResumed: true,
      };
    });
    setTurn(() => initialTurns);
    setGamePoints(() => initialGamePoints);
    setGameInputs(() => initialGameInputs);
    setGameScore(() => [
      {
        turn: "--",
        p1Previous: gamePoints.p1PreviousPoints,
        p1Current: gamePoints.p1GamePoints,
        p2Previous: gamePoints.p2PreviousPoints,
        p2Current: gamePoints.p2GamePoints,
      },
    ]);
  };
  const gamePauseBtn = (e) => {
    e.preventDefault();
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGamePaused: true,
        isGameStarted: true,
        isGameReset: false,
        isGameResumed: false,
      };
    });
  };
  const gameResumeBtn = (e) => {
    e.preventDefault();
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGamePaused: false,
        isGameStarted: true,
        isGameReset: false,
        isGameResumed: true,
      };
    });
  };
  const gameResetBtn = (e) => {
    e.preventDefault();
    console.log("Game Reset");
    setTurn(() => initialTurns);
    setGamePoints(() => initialGamePoints);
    setGameInputs(() => initialGameInputs);
    setGameMomentum(() => initialGameMomentum);
    setGameScore(() => [
      {
        turn: "--",
        p1Previous: gamePoints.p1PreviousPoints,
        p1Current: gamePoints.p1GamePoints,
        p2Previous: gamePoints.p2PreviousPoints,
        p2Current: gamePoints.p2GamePoints,
      },
    ]);
  };
  const player1SubmitBtn = (e) => {
    e.preventDefault();
    const { player1Guess, p1Input1, p1Input2 } = gameInputs;
    setGamePoints((prev) => {
      if (
        (player1Guess == "even" && parseInt(p1Input2) % 2 == 0) ||
        (player1Guess == "odd" && parseInt(p1Input2) % 2 != 0)
      ) {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints + parseInt(p1Input2),
          p2GamePoints: prev.p2GamePoints - parseInt(p1Input2),
        };
      } else {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints - parseInt(p1Input1),
          p2GamePoints: prev.p2GamePoints + parseInt(p1Input1),
        };
      }
    });
    setGameInputs(() => initialGameInputs);
    setTurn((prev) => {
      return {
        ...prev,
        player1Turn: false,
        player2Turn: true,
      };
    });
  };
  const player2SubmitBtn = (e) => {
    e.preventDefault();
    const { player2Guess, p2Input1, p2Input2 } = gameInputs;
    setGamePoints((prev) => {
      if (
        (player2Guess == "even" && parseInt(p2Input1) % 2 == 0) ||
        (player2Guess == "odd" && parseInt(p2Input1) % 2 != 0)
      ) {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints - parseInt(p2Input1),
          p2GamePoints: prev.p2GamePoints + parseInt(p2Input1),
        };
      } else {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints + parseInt(p2Input2),
          p2GamePoints: prev.p2GamePoints - parseInt(p2Input2),
        };
      }
    });
    setGameInputs(() => initialGameInputs);
    setTurn((prev) => {
      return {
        ...prev,
        player1Turn: true,
        player2Turn: false,
      };
    });
  };

  const { isGameReset, isGameStarted, isGamePaused, isGameResumed } =
    gameMomentum;
  useEffect(() => {
    setGameScore((prev) => {
      return [
        ...prev,
        {
          turn: turn.player1Turn ? "Player 2" : "Player 1",
          p1Previous: gamePoints.p1PreviousPoints,
          p1Current: gamePoints.p1GamePoints,
          p2Previous: gamePoints.p2PreviousPoints,
          p2Current: gamePoints.p2GamePoints,
        },
      ];
    });
  }, [turn, gamePoints]);
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white text-center">Squid Game - gGanbu</h1>
            </div>
          </div>
          {/* <GameRules /> */}
          <GameControllers
            gameStartBtn={gameStartBtn}
            gamePauseBtn={gamePauseBtn}
            gameResumeBtn={gameResumeBtn}
            gameResetBtn={gameResetBtn}
            gameMomentum={gameMomentum}
          />
          {/* <GameTimer /> */}
          <div className="row mt-3">
            {isGameStarted && !isGamePaused && (
              <GamePlay
                gameInputs={gameInputs}
                setGameInputs={setGameInputs}
                turn={turn}
                player1SubmitBtn={player1SubmitBtn}
                player2SubmitBtn={player2SubmitBtn}
                p1SubmitBtnActive={p1SubmitBtnActive}
                p2SubmitBtnActive={p2SubmitBtnActive}
                setP1SubmitBtnActive={setP1SubmitBtnActive}
                setP2SubmitBtnActive={setP2SubmitBtnActive}
              />
            )}
            {isGameStarted && <GameScoreBoard gameScore={gameScore} />}
          </div>
        </div>
      </div>
    </>
  );
}
