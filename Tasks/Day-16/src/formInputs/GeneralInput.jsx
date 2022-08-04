import React from "react";

export default function GeneralInput() {
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control valid"
          //   className="form-control is-invalid"
          id="floatingInput"
          placeholder="."
        />
        <label htmlFor="floatingInput">First Name</label>
      </div>
    </>
  );
}
