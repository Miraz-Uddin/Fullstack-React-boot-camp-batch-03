import Parser from "html-react-parser";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function AnswerCard({ answer, index, handleSelectedAnswer }) {
  return (
    <>
      <ListGroup.Item
        action
        href={`#${index}`}
        onClick={(e) => {
          e.preventDefault();
          return handleSelectedAnswer(answer);
        }}
      >
        {Parser(answer)}
      </ListGroup.Item>
    </>
  );
}
