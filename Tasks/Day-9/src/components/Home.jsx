import React from "react";

export default function Home() {
  const fetchQuiz = async () => {
    try {
      let response = await fetch(
        "https://opentdbs.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const { results } = await response.json();
      console.log(results);
    } catch (e) {
      console.log("Data cannot be Fetched");
      console.log(e);
    }
  };
  return (
    <>
      <button className="btn btn-success btn-sm" onClick={fetchQuiz}>
        Start Quiz
      </button>
    </>
  );
}
