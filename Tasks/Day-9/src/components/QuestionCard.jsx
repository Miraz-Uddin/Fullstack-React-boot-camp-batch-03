import Parser from "html-react-parser";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AnswerCard from "./AnswerCard";

export default function QuestionCard({
  quiz,
  index,
  count,
  navigateNext,
  quizEnd,
  resetQuiz,
}) {
  const { question, correct_answer, incorrect_answers } = quiz;
  const answers = [...incorrect_answers, correct_answer];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  Question: {index + 1} / {count}
                </h5>
                <p className="card-text">{Parser(question)}</p>
              </div>
              <ListGroup defaultActiveKey="#0">
                {answers.map((answer, index) => (
                  <AnswerCard key={index} answer={answer} index={index} />
                ))}
              </ListGroup>
              <div className="card-body d-flex justify-content-between">
                {index + 1 != count ? (
                  <button
                    onClick={navigateNext}
                    className="btn btn-dark btn-sm"
                  >
                    Next Question
                  </button>
                ) : (
                  <button onClick={quizEnd} className="btn btn-info btn-sm">
                    Finish Quiz
                  </button>
                )}
                <button onClick={resetQuiz} className="btn btn-danger btn-sm">
                  Reset Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
