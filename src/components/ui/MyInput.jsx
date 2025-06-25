import { useState } from "react";

function MyInput({type, placeholder, state, setState}) {
  return (
    <div className="form-floating mb-3">
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className="form-control"
        id={type}
        placeholder={placeholder}
      />
      <label for={type}>{placeholder}</label>
    </div>
  );
}

export default MyInput;