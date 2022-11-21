/* eslint-disable react/prop-types */
import { useState } from "react";

function InputTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    addTask(value);
    setValue("");
  };

  return (
    <div className="m-0 m-auto p-3 m-4 m-auto bg-white rounded-md">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default InputTask;
