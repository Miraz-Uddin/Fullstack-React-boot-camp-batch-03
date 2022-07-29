import React from "react";
import Card from "react-bootstrap/Card";

export default function InitialCard({ fetchQuiz }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Card style={{ width: "18rem" }} className="shadow px-4 py-3">
            <Card.Body>
              <Card.Title>Quiz Application</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Developed by Miraz
              </Card.Subtitle>
              <button className="btn btn-success btn-sm" onClick={fetchQuiz}>
                Start Quiz
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
