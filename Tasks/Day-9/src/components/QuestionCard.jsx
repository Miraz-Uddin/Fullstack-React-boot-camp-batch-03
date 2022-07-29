import Parser from "html-react-parser";
import React from "react";
import AnswerCard from "./AnswerCard";

export default function QuestionCard({ quiz, index }) {
  console.log(quiz);
  const { question, correct_answer, incorrect_answers } = quiz;
  //   const answers = [correct_answer,...incorrect_answers]
  const shufflingAnswers = [correct_answer, ...incorrect_answers];
  //   const shufflingAnswers = arrayShuffle(answers)
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
                {shufflingAnswers.map((answer, index) => (
                  <AnswerCard key={index} answer={answer} />
                ))}
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
