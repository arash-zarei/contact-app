import React from "react";

function Input({ placeholder, state, onChange, type, name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={state}
      onChange={onChange}
      className="px-4 py-2 border border-gray-300 rounded-lg outline-blue-800"
    />
  );
}

export default Input;
