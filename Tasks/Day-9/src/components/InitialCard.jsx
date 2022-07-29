import React from "react";
import Card from "react-bootstrap/Card";

export default function InitialCard({
  fetchQuiz,
  quizTotalMark,
  setQuizTotalMark,
}) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Card style={{ width: "22rem" }} className="shadow px-4 py-3">
            <Card.Body>
              <Card.Title>Quiz Application</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Developed by Miraz
              </Card.Subtitle>
              <div className="my-3">
                <label htmlFor="quiz_api_mark">
                  Select Total Questions You need
                </label>
                <select
                  id="quiz_api_mark"
                  className="form-select"
                  value={quizTotalMark}
                  onChange={(e) => setQuizTotalMark(e.target.value)}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <button
                className="btn btn-success btn-sm"
                onClick={() => fetchQuiz(quizTotalMark)}
              >
                Start Quiz
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
