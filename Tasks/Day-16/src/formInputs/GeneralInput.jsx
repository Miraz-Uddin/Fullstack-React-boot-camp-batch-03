import React from "react";

export default function GeneralInput({
  label,
  type,
  name,
  value,
  func,
  hasErrors,
  errorVal,
}) {
  return (
    <>
      <div className="form-floating mb-3">
        <input
          id="floatingInput"
          type={type}
          className={`form-control ${errorVal && "is-invalid"}`}
          name={name}
          placeholder={name}
          value={value}
          onChange={func}
        />
        <label htmlFor="floatingInput">{label}</label>
      </div>
      {hasErrors && <div className="invalid-feedback">{errorVal}</div>}
    </>
  );
}
