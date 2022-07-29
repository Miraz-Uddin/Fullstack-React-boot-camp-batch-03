import React from "react";

export default function AnswerCard({ answer, index }) {
  return (
    <>
      {/* <a href="#" class="list-group-item list-group-item-action active" aria-current="true">The current</a>
            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
        */}
      <a href="#" className="list-group-item list-group-item-action">
        {`(${index + 1})`} {answer}
      </a>
    </>
  );
}
