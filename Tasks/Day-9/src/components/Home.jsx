import React, { useState } from "react";
import arrayShuffle from "../utils/arrayShuffle";
import QuestionCard from "./QuestionCard";

export default function Home() {
  const [allQuiz, setAllQuiz] = useState(null);
  const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [nextButtonDisable, setNextButtonDisable] = useState(true);
  const fetchQuiz = async () => {
    try {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const { results } = await response.json();
      setAllQuiz(results);
      setQuizOver(false);
    } catch (e) {
      setAllQuiz(null);
      console.log("Data cannot be Fetched");
      console.log(e);
    }
  };

  const navigateNext = () => {
    if (currentQuizQuestionIndex < allQuiz.length - 1)
      setCurrentQuizQuestionIndex((prev) => prev + 1);
  };

  const quizEnd = () => {
    setQuizOver(true);
    setCurrentQuizQuestionIndex(0);
    setAllQuiz(null);
  };

  const resetQuiz = () => {
    setQuizOver(false);
    setCurrentQuizQuestionIndex(0);
    setAllQuiz(null);
  };

  let answersSet = [];
  let shufflingAnswers = [];
  if (allQuiz) {
    answersSet = [
      allQuiz[currentQuizQuestionIndex].correct_answer,
      ...allQuiz[currentQuizQuestionIndex].incorrect_answers,
    ];
    shufflingAnswers = arrayShuffle(answersSet);
  }

  return (
    <>
      {quizOver && <p>Show the Answer. Score: 0</p>}
      {!allQuiz ? (
        <button className="btn btn-success btn-sm" onClick={fetchQuiz}>
          Start Quiz
        </button>
      ) : (
        <QuestionCard
          quiz={allQuiz[currentQuizQuestionIndex]}
          index={currentQuizQuestionIndex}
          count={allQuiz.length}
          navigateNext={navigateNext}
          quizEnd={quizEnd}
          resetQuiz={resetQuiz}
          nextButtonDisable={nextButtonDisable}
          setNextButtonDisable={setNextButtonDisable}
          answersSet={answersSet}
          shufflingAnswers={shufflingAnswers}
        />
      )}
    </>
  );
}
