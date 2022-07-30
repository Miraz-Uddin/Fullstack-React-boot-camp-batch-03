import React, { useState } from "react";
import GameControllers from "./GameControllers";
import GamePlay from "./GamePlay";
// import GameRules from "./GameRules";
import GameScoreBoard from "./GameScoreBoard";
// import GameTimer from "./GameTimer";

const initialTurns = {
  player1Turn: true,
  player2Turn: false,
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
  const [turn, setTurn] = useState(initialTurns);
  const [gameInputs, setGameInputs] = useState(initialGameInputs);
  const [gameMomentum, setGameMomentum] = useState(initialGameMomentum);

  const gameStartBtn = (e) => {
    e.preventDefault();
    console.log("Game Started");
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGameStarted: true,
        isGamePaused: false,
        isGameReset: false,
        isGameResumed: true,
      };
    });
  };
  const gamePauseBtn = (e) => {
    e.preventDefault();
    console.log("Game Paused");
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
    console.log("Game Resumed");
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
    setGameMomentum(() => initialGameMomentum);
    setGameInputs(() => initialGameInputs);
    setTurn(() => initialTurns);
  };
  const player1SubmitBtn = (e) => {
    e.preventDefault();
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
              />
            )}
            <GameScoreBoard />
          </div>
        </div>
      </div>
    </>
  );
}
