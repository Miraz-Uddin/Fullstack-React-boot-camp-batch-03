import Parser from "html-react-parser";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function AnswerCard({ answer, index, userSelected }) {
  return (
    <>
      <ListGroup.Item
        action
        href={`#link${index}`}
        onClick={() => userSelected(answer)}
      >
        {Parser(answer)}
      </ListGroup.Item>
    </>
  );
}
