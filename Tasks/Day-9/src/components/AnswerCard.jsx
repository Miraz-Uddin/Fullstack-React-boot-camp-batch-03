import Parser from "html-react-parser";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function AnswerCard({
  answer,
  index,
  userSelected,
  correctAnswer,
}) {
  return (
    <>
      <ListGroup.Item
        action
        href={`#${index}`}
        onClick={() => userSelected(answer, correctAnswer)}
      >
        {Parser(answer)}
      </ListGroup.Item>
    </>
  );
}
