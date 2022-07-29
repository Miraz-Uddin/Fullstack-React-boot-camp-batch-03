import React, { useState } from "react";

export default function Home() {
  const [allQuiz, setAllQuiz] = useState(null);
  const fetchQuiz = async () => {
    try {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const { results } = await response.json();
      setAllQuiz(results);
    } catch (e) {
      setAllQuiz(null);
      console.log("Data cannot be Fetched");
      console.log(e);
    }
  };
  return (
    <>
      {!allQuiz && (
        <button className="btn btn-success btn-sm" onClick={fetchQuiz}>
          Start Quiz
        </button>
      )}
    </>
  );
}
