import Parser from "html-react-parser";
import React, { useEffect, useState } from "react";
import arrayShuffle from "../utils/arrayShuffle";
import AnswerCard from "./AnswerCard";

export default function QuestionCard({ quiz, index }) {
  // Shuffling Answers
  const { question, correct_answer, incorrect_answers } = quiz;
  const answers = [correct_answer, ...incorrect_answers];
  const [answersSet, setAnswersSet] = useState(answers);
  const shufflingAnswers = arrayShuffle(answers);
  useEffect(() => setAnswersSet(shufflingAnswers), []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Question: {index + 1} / 5</h5>
                <p className="card-text">{Parser(question)}</p>
              </div>
              <ul className="list-group list-group-flush">
                {answersSet.map((answer, index) => (
                  <AnswerCard key={index} answer={Parser(answer)} />
                ))}
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Next Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
