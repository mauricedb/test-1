import React from "react";

function TextInput({ label, value, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
