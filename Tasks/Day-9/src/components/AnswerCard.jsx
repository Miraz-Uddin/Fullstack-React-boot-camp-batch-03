import Parser from "html-react-parser";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function AnswerCard({ answer, index }) {
  return (
    <>
      <ListGroup.Item action href={`#${index}`}>
        {Parser(answer)}
      </ListGroup.Item>
    </>
  );
}
