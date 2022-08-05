import React from "react";

export default function ShowErrors({ errors }) {
  return (
    <>
      <ul style={{ height: "125px" }}>
        {errors &&
          errors.map((item, index) => {
            return (
              <li key={index} className={item.type}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}
