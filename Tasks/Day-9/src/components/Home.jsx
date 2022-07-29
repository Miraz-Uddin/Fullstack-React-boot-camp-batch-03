import React from "react";

export default function Home() {
  const fetchQuiz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    console.log(results);
  };
  return (
    <>
      <button onClick={fetchQuiz}>Start Quiz</button>
    </>
  );
}
