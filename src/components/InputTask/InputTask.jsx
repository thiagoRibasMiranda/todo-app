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
    <div className="text-3xl font-bold underline">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Adicionar
      </button>
    </div>
  );
}

export default InputTask;
