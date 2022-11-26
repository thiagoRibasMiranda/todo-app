/* eslint-disable react/prop-types */
import { useState } from "react";
import { ReactComponent as PlusLogo } from "./icons/plus.svg";

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
    <div className="m-0 m-auto p-3 m-4 mb-0.5 bg-white rounded-md shadow-lg">
      <div className="flex justify-between">
        <input
          type="text"
          className="w-full"
          placeholder="Create a new todo..."
          value={value}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          <PlusLogo />
        </button>
      </div>
    </div>
  );
}

export default InputTask;
