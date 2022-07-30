import React, { useState } from "react";
import GameControllers from "./GameControllers";
import GamePlay from "./GamePlay";
// import GameRules from "./GameRules";
import GameScoreBoard from "./GameScoreBoard";
// import GameTimer from "./GameTimer";

export default function Home() {
  const [gameInputs, setGameInputs] = useState({
    player1Guess: "even",
    player2Guess: "odd",
    p1Input1: "",
    p1Input2: "",
    p2Input1: "",
    p2Input2: "",
  });

  const [gameMomentum, setGameMomentum] = useState({
    isGameStarted: false,
    isGamePaused: true,
    isGameReset: true,
    isGameResumed: true,
  });

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
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGameReset: true,
        isGameStarted: false,
        isGamePaused: true,
        isGameResumed: true,
      };
    });
  };
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
            <GamePlay gameInputs={gameInputs} setGameInputs={setGameInputs} />
            <GameScoreBoard />
          </div>
        </div>
      </div>
    </>
  );
}
