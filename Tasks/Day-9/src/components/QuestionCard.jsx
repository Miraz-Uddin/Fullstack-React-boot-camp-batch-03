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
  answersSet,
  shufflingAnswers,
  nextButtonDisable,
  setNextButtonDisable,
}) {
  const { question, correct_answer, incorrect_answers } = quiz;

  const userSelected = (answer) => {
    console.log("user selected: " + answer);
    console.log("correct answer: " + correct_answer);
    setNextButtonDisable(false);
    if (answer === correct_answer) {
      console.log("user is right");
    } else {
      console.log("user is not right");
    }
  };

  console.log(correct_answer);
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
              <ListGroup defaultActiveKey="#link2">
                {shufflingAnswers.map((answer, index) => (
                  <AnswerCard
                    key={index}
                    answer={answer}
                    index={index}
                    userSelected={userSelected}
                  />
                ))}
              </ListGroup>
              <div className="card-body d-flex justify-content-between">
                {index + 1 != count ? (
                  <button
                    onClick={navigateNext}
                    className="btn btn-dark btn-sm"
                    disabled={nextButtonDisable ? "disabled" : ""}
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
